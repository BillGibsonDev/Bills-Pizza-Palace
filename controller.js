import express from 'express';
import mongoose from 'mongoose';
import { ItemModel } from './ItemModel.js';

const router = express.Router();

export const createItem = async ( req, res ) => {
    const { images, thumbnail, title, price, description, type } = req.body

    const newItem = new ItemModel({ images, thumbnail, title, price, description, type })
    try {
        await newItem.save();

        res.status(201).json("Item Created");
    } catch (error){
        res.status(409).json({ message: error.message});
    }
}

export const getMenu = async (req, res) => { 
    try {
        const menu = await ItemModel.find();
                
        res.status(200).json(menu);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getMenuItem = async (req, res) => { 
    const { id } = req.params;
    try {
        const item = await ItemModel.findById(id);
        
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}