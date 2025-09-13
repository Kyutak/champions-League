import createApp from './aplication';

const app = createApp();
const port = process.env.PORT;


app.listen(port, ()=>{
    console.log(`Server estar rodando🔊 http://localhost:${port}`)
});