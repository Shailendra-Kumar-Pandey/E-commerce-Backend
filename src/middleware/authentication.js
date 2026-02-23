import jwt from 'jsonwebtoken';

const authentication = async (req, res, next)=>{

    let authData = req?.headers?.authorization

    try {
        if(!authData && !authData?.startsWith('Bearer')){
            return res.status(404).json({massage: "Unauthorization User... Please Enter Token..."})
        }

        let token = authData?.startsWith('Bearer')[1]

        let decode = jwt?.verify(token, process.env.SECRET_TOKEN);

        if(!decode){
            return res.status(404).json({massage : "Please Enter Vailid Token... Unauthorization User..."})
        }

        next()

        return
    } catch (error) {
        return res.status(500).json({massage:`${error}, Server Error...`})
    }

}

export default authentication;