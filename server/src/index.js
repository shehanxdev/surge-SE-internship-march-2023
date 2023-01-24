/* MODULES */
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const { fileURLToPath } = require("url");
const terminal_kit = require("terminal-kit");

/* CONFIGURATIONS */
dotenv.config();
const app = express();
const terminal = terminal_kit.terminal;
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/* MONGODB CONFIGUARATION AND STARTING APP */
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGODB_URL, {
    usenewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Surge",
  })
  .then(() => {
    terminal.bold.green("MongoDB is connected\n");
    if (PORT) {
      app.listen(PORT, () => {
        terminal.blue.bold(`App is listening at the port ${PORT}`);
      });
    }
  })
  .catch((error) => {
    terminal.bold.red(
      "Did not connect to the database due to ERROR: " + error + "\n"
    );
  });
/* CONFIGUARING ROUTES */
app.get("/api", (req, res) => {
  res.json({ message: "Hi" });
});
app.get("/health", (req, res) => {
  res.status(200).json({ message: "OK" });
});
