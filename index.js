
const express = require('express');
const server = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const swaggerUi = require("swagger-ui-express")


server.use(express.json()); 
server.use(morgan('dev'));

/*------------------------ Routers--------------- */
const teacherRouter = require("./Routes/teacherRouter");
const loginRouter = require('./Routes/loginRouter');
const autMw = require("./middlewares/authMiddlewar");
const registerRouter = require('./Routes/teacherRegister');
const childrenRouter = require("./Routes/childRouter");
const classRouter = require("./Routes/classRouter");
const passwordRouter = require("./Routes/changePasswordRouter");
server.use("/docs", swaggerUi.serve, swaggerUi.setup(require("./swagger-output.json")))
server.use( registerRouter)
server.use( loginRouter)
server.use(autMw)
server.use( passwordRouter);
server.use( "/api",teacherRouter);
server.use( "/api",childrenRouter);
server.use( "/api",classRouter);


/*------------------------ Servers--------------- */

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("DB connection successful!")
    server.listen(process.env.PORT, () => console.log(`Server is  Listening at port ${process.env.PORT}`));
  })

  .catch(() => { console.log("Could not connect to DB!") })


server.use((request, response, next) => {
  response.status(404).json({ message: "Error 404" });
});

server.use((error, request, response, next) => {
  response.status(500).send(error.message);
});


