var http = require('http');
var express =require('express');
var bodyParser= require('body-parser');
var fs = require ( 'fs' ) ;
var JSONStream = require('JSONStream');
var path = require('path');
var etudiant =require('./etudiant');


var app =express();

app.use(bodyParser.urlencoded({extended: true}))

// Home
app.get('/',function(req,res){

      res.sendFile(__dirname + '/index.html');
});

//Affichage fichier JSON

app.post('/afficher',function(req,res){

          etudiant.find({},function(err,data){
              if(err){
                res.json({success:false,data:err});
              }
              else {
                res.json({success:true,data:data});
              }
          })

});

//enregister un Etudiant a la base

app.post('/enregisterEtudiant',function(req,res){

                var Etudiant = new etudiant ({
                  nom: req.body.nom,
                  prenom: req.body.prenom,
                  sujet: req.body.sujet
                })

                Etudiant.save(function(err,data){
                  if (err) return console.log(err)
              console.log(Etudiant);
                console.log('saved to database');
                res.redirect('/');
              })
                
});


app.listen(3000,function(){

  console.log('listenning on port 3000');
});
