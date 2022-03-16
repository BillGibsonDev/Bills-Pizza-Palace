import express from 'express';
import dotenv from 'dotenv';

import { getMenu, getMenuItem, createItem } from 'controller.js';

const router = express.Router();

dotenv.config();

// read
router.get(`/${process.env.NODE_ENV_GET_MENU_URL}`, getMenu);
router.get(`/${process.env.NODE_ENV_GET_MENU_ITEM_URL}/:id`, getMenuItem);

// create
router.post(`/${process.env.NODE_ENV_CREATE_ITEM_URL}`, createItem);