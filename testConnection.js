import mongoose from 'mongoose';

// Definir la función testConnection
async function testConnection() {
    const uri = 'mongodb://127.0.0.1/merndb';
    const client = new mongoose.Mongoose();

    try {
        await client.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        await client.disconnect();
    }
}

// Llamar a la función testConnection
testConnection();
