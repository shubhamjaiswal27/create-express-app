import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        users: [
            {
                id: 1,
                name: 'John Doe',
            },
            {
                id: 2,
                name: 'Jane Doe',
            },
        ],
    });
});

export default router;