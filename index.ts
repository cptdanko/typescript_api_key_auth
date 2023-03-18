import express, { Express, Request, response, Response } from 'express';
import { add_user, getExchangeRate, getUser } from './src/user_db';

const app: Express = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/ping', (req: Request, res: Response) => {
    res.status(200).send({"message": "Hello Concurrently"});
});

app.post("/user", (req: Request, res: Response) => {
    const body = req.body;
    if(!body) {
        res.status(400).send("Error add user request must have a body")
    }
    const new_user = add_user(body.username);
    res.status(201).send(new_user);
});

app.get("/exchangeRates", (req: Request, res: Response) => {
    const apikey = req.headers["x-api-key"] as string;
    if(!apikey) {
        res.status(400).send("Missing API key in header");
    }
    const user = getUser(apikey);
    if(!user) {
        res.status(403).send("Invalid API key");
    }
    //otherwise, increment the usage count and return exchange rates
    const data = getExchangeRate(user!);
    if(typeof data == "string"){
        res.status(429).send(data);
    } else {
        res.status(200).json(data);
    }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});