import { Client } from 'twitter-api-sdk';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const client = new Client(process.env.TWITTER_BEARER_TOKEN as string);

    if (!req.query.uid) {
        throw new Error('Invalid UID');
    }

    const uid = req.query.uid.toString();

    try {
        const response = await client.users.findUserById(uid);
        res.status(200).send(response);
    } catch (e) {
        console.error(e);
        res.status(500).send(e);
    }
}
