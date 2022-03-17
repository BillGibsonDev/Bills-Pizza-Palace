import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
    price: {
        type: Number,
    },
    title: {
        type: String,
    },
    image: {
        type: String,
    },
    type: {
        type: String,
    }
})

export const ItemModel = mongoose.model("Item", ItemSchema);