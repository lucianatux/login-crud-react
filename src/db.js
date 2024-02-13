import mongoose from 'mongoose';

export const conectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/merndb');  
    } catch (error) {
        console.error(error);
    }
};
