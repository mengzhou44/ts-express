import express, { Request, Response, Express } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello </h1>');
});

app.listen(3000, ()=> {
     console.log('server is running on 3000 hot reload!')
}) 