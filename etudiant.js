var mongoose=require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/etudiant');
let db=mongoose.connection;
db.once('open',function () {
  console.log('conecte a la base');
});

db.on('error',function (err) {
  console.log(err);
});

var etudiantShema = new mongoose.Schema({
 nom: {
 type : String },
prenom:{
  type : String },
sujet:{
  type : String }
});

var etudiant = mongoose.model('etudiant',etudiantShema);
module.exports = etudiant;
