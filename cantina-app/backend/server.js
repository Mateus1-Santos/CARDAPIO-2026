const express = require ('express');
const app = express();

app.use(express.json());

//porta usada pelo servidor 
app.listen(3000, ()=>{
    console.log("Servidor rodando com sucesso na porta 3000");
});