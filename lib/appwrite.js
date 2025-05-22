import { Client } from 'appwrite';

// Initialize the Appwrite client
const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('682e342a000efab895d8');

export default client;