import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { movieRoutes } from './infra/http/routes/movieRoutes';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/healthcheck', (req, res) => {
    res.json({
        status: 'up',
        timestamp: new Date().toISOString(),
        project: 'PopcornTime'
    });
});

app.use('/movies', movieRoutes);

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`)
})