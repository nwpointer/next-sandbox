import * as uuid from 'uuid';
import db from '../../lib/db';

export default async function handler(req, res) {
    if (req.method === 'PUT') {
        const item = {
            id: uuid.v4(),
            content: req.body.content,
            createdAt: Date.now()
        }

        await db.put({ Item: item })

        res.status(201).json(item)
    }

    if (req.method === 'GET') {
        const { Item } = await db.get({ Key: { id: req.query.id } })
        res.status(200).json(Item);
    }

    if (req.method === 'POST') {

        console.log(req.body)

        const { Attributes } = await db.update({
            Key: { id: req.body.id },
            UpdateExpression: 'SET content = :c',
            ExpressionAttributeValues: { ':c': req.body.content },
            ReturnValues: 'ALL_NEW'
        })

        res.status(200).json(Attributes)
    }

    if (req.method === 'DELETE') {
        await db.delete({
            Key: { id: req.query.id },
            ReturnValues: 'ALL_OLD'
        })

        res.status(204).end();
    }

}