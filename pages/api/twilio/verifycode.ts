import twilio from 'twilio';
import pool from '../../../utils/database';
import type { NextApiRequest, NextApiResponse } from 'next';

const client = twilio(process.env.ACCOUNT_SID as string, process.env.AUTH_TOKEN as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const twilioResponse = await client.verify
            .services(process.env.VERIFY_SERVICE_SID as string)
            .verificationChecks.create({
                to: `+62${req.query.ver}`,
                code: req.query.cipher as string,
            });

        if (!twilioResponse.valid) {
            throw new Error('Invalid code');
        }

        res.status(200).send(twilioResponse);

        const wa = `${twilioResponse.to}`;
        const today = new Date();
        const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

        const dbResponse = await dbQuery(wa, date);
    } catch (e) {
        console.error(e);
        res.status(500).send(e);
    }
}

const dbQuery = async (whatsapp: string, registerdate: string) => {
    const queryString = 'INSERT INTO users_wa(whatsapp, registerdate) VALUES($1, $2)';
    const arr = [whatsapp, registerdate];

    return new Promise((resolve, reject) => {
        pool.query(queryString, arr, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
};
