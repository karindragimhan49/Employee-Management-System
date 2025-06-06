const express = require("express");
const dbConnection = require("./config/db");
const routes = require("./routes/employees");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors({ origin: true, credentials: true }));

//DB Connection
dbConnection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/employees", routes);

const PORT = 3001;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
