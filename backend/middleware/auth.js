import jwt from 'jsonwebtoken';

const authMiddleware = async (req,res,next)=>{
    
    const {token} = req.headers;
    if(!token)
        {
            res.json({success : false , message : "Not Authorized login again"});
        }
        try {
            const tokenDecode = jwt.verify(token,process.env.JWT_SECRET);
            req.body.userId = tokenDecode.id;
            next();
        } catch (error) {
        // console.log("AAahahahhaha");
        console.log(error)
        res.json({success : false , message : "Error"});
    }
};

export default authMiddleware;