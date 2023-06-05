const express = require("express");
const { connection } = require("./database/db");
const { sewakRouter } = require("./routes/sewaks.routes");
const { adminRoute } = require("./routes/admin.routes");
const { auth } = require("./middleware/auth.middleware");
const cors = require("cors");
// env variables
require("dotenv").config();
const port = process.env.PORT;

const app = express();

// middleware's
app.use(express.json());
app.use(cors());

app.use("/admins", adminRoute);
app.use(auth);
app.use("/sewaks", sewakRouter);

// server
app.listen(port, async () => {
    try {
        console.log(`server is running at port-...`);
        await connection;
        console.log("DB connected successfully...")
    } catch (error) {
        console.log("DB not connected...!")
        console.log(error);
    }
})