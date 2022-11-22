import express from 'express';
import { AddTodayMed  , GetAddedToday , DeleteAddedToday}  from '../controllers/addedTodayController.js';


const router = express.Router();

router.post(`/`,AddTodayMed)
router.get(`/`,GetAddedToday)
router.delete(`/:id`,DeleteAddedToday)







export default router