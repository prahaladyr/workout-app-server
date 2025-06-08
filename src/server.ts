import app from './app';
import dotenv from 'dotenv';
import connectDB from './config/db';

dotenv.config();

const PORT = process.env.PORT;

app.get('/', (request, response) => {
    response.send(`Server running on http://localhost:${PORT}`);
});

app.listen(PORT, () => {
    connectDB();
});
