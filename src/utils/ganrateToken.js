import jwt from 'jsonwebtoken';


export const token = (email, id)=>{
    return jwt.sign({email, id}, process.env.SECRET_TOKEN, {expiresIn:'7d'})
}