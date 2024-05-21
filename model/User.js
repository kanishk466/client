import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    iss: String,
    azp: String,
    aud: String,
    sub: String,
    email: {
      type: String,
      required: true
    },
    email_verified: Boolean,
    nbf: Number,
    name:{type : String , 
    required : true} ,
    picture: String,
    given_name: String,
    family_name: String,
    iat: Number,
    exp: Number,
    jti: String
})

const user = mongoose.model('user', userSchema);

export default user;