import express from "express";
import dotenv from "dotenv";
import product  from "../src/router/product.js";
import auth  from "../src/router/auth.js";
import order  from "../src/router/order.js";
import authMiddleware  from "../src/middlewares/auth.js";
import bodyParser from "body-parser";
import connectDB from "./database.js";
import logger from "./middlewares/logger.js";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();

dotenv.config();

connectDB();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set("view engine","ejs",)


app.use(logger);
app.use(cookieParser());

app.use(cors({
  origin:"https://localhost:3000"
}))

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({
    appName:"Node js code",
    version:'1.1.0',
    port:PORT,
  })
});


app.use("/api/products", product)
// app.get("/about", (req, res) => {
//   res.send("about page");
// });

// app.get("/products", (req, res) => {
//   res.send("products page");
// });
app.use("/api/auth", auth)

app.use("/api/order",order);

///views 
app.get('/home',authMiddleware,(req,res)=>{
res.render("index", {User:"user"})
})

app.get('/login',(req,res)=>{
  res.render("login")
  })
  

app.listen(PORT, () => {
  console.log(`server running at ${PORT}....`);
});
