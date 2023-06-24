const url = require('url');
const express = require('express');
const app=express();
const { dipendenti }  = require('./dipendenti');
app.use(express.json());       
        
app.get('/dipendenti',function(req,res){
        console.log("1 --> GET DIPENDENTI");
        res.status(200).json({data:dipendenti});
        console.log("2 --> json ok");
});

app.get('/dipendenti/:id',function(req,res){
        console.log("1 --> GET DIPENDENTE");
        console.log(req.params.id);
        const {id}=req.params;
        const dipendente=dipendenti.filter((persona)=>{
               return persona.code === id;
        });
        console.log(JSON.stringify(dipendente));
        res.status(200).json({data:dipendente});
        console.log("2 --> json ok");
});
app.delete('/dipendenti/:id',function(req,res){
        console.log("1 --> DELETE DIPENDENTE");
        console.log(req.params.id);
        const {id}=req.params;
        const index=dipendenti.findIndex((persona )=>persona.code===id);
        dipendenti.splice(index,1);
        console.log(JSON.stringify(dipendenti));
        res.status(200).json({data:dipendenti});
        console.log("2 --> json ok");
});
app.post('/dipendenti',function(req,res){
        const dipendente=req.body
        dipendenti.push(dipendente);
        console.log("dipendente aggiunto");
        res.status(200).json({data:dipendenti});
})
app.put('/dipendenti/:id',function(req,res){
        const {id}=req.params;
        const index=dipendenti.findIndex((dipen )=>dipen.code===id);
        console.log(index);
        const dipendente=req.body
        dipendenti[index]=dipendente;
        console.log("dipendente aggiornato");
        res.status(200).json(dipendenti);
        })
let port=8080;
app.listen(port);
console.log("3 --> server avviato");