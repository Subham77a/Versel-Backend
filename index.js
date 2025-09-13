import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// For ES Modules: emulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Send HTML file on GET request
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about',(req,res)=>{
    res.send('<h1>Hello this is about page</h1>');
});

app.post('/about',(req,res)=>{
    const username=req.body.username;
    res.send(`<h1>Welcome ${username}</h1>`) ;
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
