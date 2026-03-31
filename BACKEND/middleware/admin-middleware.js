const adminMiddleware = (req, res, next) => {
    try {
        const adminRole=req.user.isAdmin;
        if(!adminRole){
            return res.status(403).json({message:"You are not authorized to access this route"})
        }
        next();
    } catch (error) {
        next(error);
        
    }
}
module.exports=adminMiddleware;