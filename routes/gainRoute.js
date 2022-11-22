import express from 'express';
import { getgain , updateGain }  from '../controllers/gainController.js';


const router = express.Router();

router.get(`/`,getgain)
router.patch(`/`,updateGain)





export default router