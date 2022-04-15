import aws from 'aws-sdk'

const client = new aws.DynamoDB.DocumentClient({
    region: process.env.REGION,
    params: { TableName: process.env.TABLE_NAME }
})

export default {
    get: params => client.get(params).promise(),
    put: params => client.put(params).promise(),
    query: params => client.query(params).promise(),
    update: params => client.update(params).promise(),
    scan: params => client.scan(params).promise(),
    delete: params => client.delete(params).promise()
}