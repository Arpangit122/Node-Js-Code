const roleBaseAuth=(role)=>{
    return(req,res,next)=>{
  // Authorize using user roles
            if(!req.user.roles.includes(role)){
                return res.status(403).send("access dined.")
            }
        next();

    }
}

export default roleBaseAuth;