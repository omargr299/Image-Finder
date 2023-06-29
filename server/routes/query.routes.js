import {Router} from 'express'
import dotenv from 'dotenv'
import { createClient } from 'pexels';

dotenv.config()

const client = createClient(process.env.KEY);

const router = Router();

router.get('/&search=:s&page=:p', async (req,res) => {
        const query = {query: req.params.s, per_page: 20};
        await client.photos.search(query)
            .then((photos)=> 
                res.send(photos)
            );
    }
);

export default router;