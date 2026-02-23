import jwt from 'jsonwebtoken';

const authentication = async (req, res, next)=>{

    let authData = req?.headers?.authorization;

    
    try {
        if(!authData && !authData?.startsWith('Bearer')){
            return res.status(404).json({massage: "Unauthorization User... Please Enter Token..."})
        }
        
        let token = authData?.split(' ')[1]
        
        let decode = jwt.verify(token, process.env.SECRET_TOKEN);

        req.headers = decode.id;

        // console.log(decode.id)
        
        if(!decode){
            return res.status(404).json({massage : "Please Enter Vailid Token... Unauthorization User..."})
        }
        next()

    } catch (error) {
        return res.status(500).json({massage:`${error}, Server Error...`})
    }

}

export default authentication;