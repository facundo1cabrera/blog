import type { NextApiRequest, NextApiResponse } from 'next'
import { db, seedData } from '../../database';
import { Blog } from '../../models';

type Data = {
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if ( process.env.NODE_ENV === 'production') {
        return res.status(401).json({ message: 'No tienes permisos '})
    }

    await db.connect();

    await Blog.deleteMany();


    await Blog.insertMany( seedData.posts );

    console.log('no siembra');

    await db.disconnect();

    res.status(200).json({ message: 'Example' })
}