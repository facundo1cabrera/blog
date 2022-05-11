import type { NextApiRequest, NextApiResponse } from 'next'
import { getHeapCodeStatistics } from 'v8';
import { db } from '../../../database';
import { Blog, IBlog } from '../../../models';

type Data = 
    | { message: string }
    | IBlog[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    switch (req.method) {
        case 'GET':
            
            return getPosts( res );
    
        default:
            return res.status(400).json({ message: 'Endpoint no existe' });
    }

}

const getPosts = async ( res: NextApiResponse<Data> ) => {
    await db.connect();
    const posts = await Blog.find();

    res.status(200).json( posts )
}