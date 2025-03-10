const express = require("express")
const cors = require("cors")
const dbConnection = require("./databse/dbConnection")
const { errorMiddleware } = require("./error/error")
const reservationRouter = require("./router/reserveRoute")

PORT = 8000



const app = express()

app.use(
    cors({
    //   origin: "http://localhost:3000", 
      origin:"https://vercel-p2-restaurant-app-ui.vercel.app", 
      methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"], 
    credentials: true, 


    })
  );

  app.use(express.json());



dbConnection()
app.use(errorMiddleware)
app.use("/api/v1/reservation",reservationRouter)
app.get("/", (req, res)=>{
    res.send("hii i m all set")
})


app.listen(PORT, ()=> console.log("server started at port 8000")
)