import { Client,Databases,Account, Storage } from 'appwrite';

// Initialize the Appwrite client
const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('682e342a000efab895d8');

export default client;

const databases = new Databases(client)
const account = new Account(client)
const storage = new Storage(client)

export {
    databases,
    account,
    storage
}