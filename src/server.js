const express =require('express');
const cors =require('cors');
const router =express.Router();

const app = express();

/* app.use(cors()); *//* 
app.use(routes); */

router.get('/', (req, res, next)=>{
    res.status(200).send({
        mensagem:'OkL'
    })
})
app.use(router);
app.listen(3000);