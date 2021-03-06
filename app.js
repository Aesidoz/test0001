const express = require("express");

const userRoute = require("./routes/userRoute");
const todoRoute = require("./routes/todoRoute");
const notFoundMiddleware = require("./middelwere/notfound");
const errorMiddleware = require("./middelwere/error");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//REST API: handle resource Todos
//CREATE, UPDATE, DELETE, GETALL, GETBYID
app.use("/todos", todoRoute);
//REST API: handle resource Users
//CREATE, UPDATE
app.use("/users", userRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = 8003;
app.listen(port, () => console.log(`server running on port: ${port}`));
