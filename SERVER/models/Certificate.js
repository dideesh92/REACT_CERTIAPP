const { Schema} =require('mongoose');
const { model} =require('mongoose');

const CertificateSchema = new Schema({
   coursename: { type: String, required: true },
   courseid: {type: String, required: true},
   studentname: { type: String, required: true },
   grade: { type: String, required: true },
  date: { type: Date, required: true },
  
});

const certificate = model('certificates', CertificateSchema);

module.exports = certificate;
