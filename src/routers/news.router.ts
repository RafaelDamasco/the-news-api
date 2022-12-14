import axios from 'axios'
import express from 'express'
import NewsController from '../controller/news.controller'
import { verifyCache } from '../middlewares/verify-cache.middleware'

export const NewsRouter = express.Router()

NewsRouter.get('/api', NewsController.news)

NewsRouter.get('/api/search', verifyCache, NewsController.search)
