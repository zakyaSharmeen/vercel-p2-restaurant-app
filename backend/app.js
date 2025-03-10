const express = require("express")
const cors = require("cors")
const dbConnection = require("./databse/dbConnection")
const { errorMiddleware } = require("./error/error")
const reservationRouter = require("./router/reserveRoute")

PORT = 8000



const app = express()
// app.use(cors())
// const corsOptions = {
//     origin: "http://localhost:3000",
//     credentials: true, 
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     allowedHeaders: "Content-Type,Authorization",
// };
// app.use(
//     cors({
//       origin: "http://localhost:3000", 
//       credentials: true, 
//     })
//   );
app.use(
    cors({
      origin: "https://vercel-p2-restaurant-app.vercel.app", 
      credentials: true,
    })
  );
  
  app.use(express.json());

// app.use(cors(corsOptions));
app.use(express.json())


dbConnection()
app.use(errorMiddleware)
app.use("/api/v1/reservation",reservationRouter)
app.get("/", (req, res)=>{
    res.send("hii i m all set")
})


app.listen(PORT, ()=> console.log("server started at port 8000")
)