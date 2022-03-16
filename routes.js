import express from 'express';
import dotenv from 'dotenv';

import { getMenu, getMenuItem, createItem } from './controller.js';

const router = express.Router();

dotenv.config();

// read
router.get(`/menu`, getMenu);
router.get(`/menu/:id`, getMenuItem);

// create
router.post(`/${process.env.NODE_ENV_CREATE_ITEM_URL}`, createItem);