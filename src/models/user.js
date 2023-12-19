const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://thanhduong81959:GOASUbo14TQsh94U@cluster0.hs3frd6.mongodb.net/test';

mongoose.connect(MONGO_URI)
.then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true },
  password: {
    type: String,
    required: true }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
