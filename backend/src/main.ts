import express from 'express';
import cors from 'cors';
import 'dotenv/config';

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

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`)
})