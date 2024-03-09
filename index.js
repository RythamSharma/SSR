import express from "express";
import connectDB from "./db/db.js";
import userrouter from "./routers/user.router.js";
import methodOverride from 'method-override'
const app = express();
const port = 3001;
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/user", userrouter);
app.set('views','./views')
app.set('view engine','ejs')
connectDB()
  .then(() => {
    app.listen(3001, () => {
      console.log(`⚙️ Server is running at port : ${port}`);
    });
  })
  .catch((err)=>{
    console.log(err)
  })
