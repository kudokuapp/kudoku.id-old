import { TwitterApi } from 'twitter-api-v2';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { text, secret, token } = req.body;

    const client = new TwitterApi({
        appKey: process.env.TWITTER_APP_KEY as string,
        appSecret: process.env.TWITTER_APP_SECRET as string,
        accessToken: token as string,
        accessSecret: secret as string,
    }).readWrite;

    try {
        const response = await client.v1.tweet(`${text} @kudokuapp #Kudoku`);
        res.status(200).json({ message: response });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: e });
    }
}
