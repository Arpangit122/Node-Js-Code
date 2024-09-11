const logger=(req,res,next)=>{
    console.log(`${req.method} \nUrl: ${req.originalUrl}`);

// if (req.method==="DELETE"){
//     throw Error ("Deleted not allowed")
// }
    next();
}


export default logger;