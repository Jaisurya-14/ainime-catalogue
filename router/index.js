import express from 'express';
import AnimeController from '../controllers/AnimeController.js'

const router = express.Router();



router.get('/get-all-anime', AnimeController.getAllAnime);
router.get('/get-anime/:anime_id', AnimeController.getAnimeById);
router.get('/add-anime', AnimeController.addAnime);

router.get('/', (req, res) => {
    res.send('Hello World');
});


export default router;