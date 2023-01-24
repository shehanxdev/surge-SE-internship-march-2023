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
const PORT = process.env.PORT;
mongoose
  .connect(process.env.MOnGODB_URL, {
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
app.use("/api", (req, res) => {
  res.json({ message: "Hi" });
});
// static files (build of your frontend)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client", "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..//client", "build", "index.html"));
  });
}
//*exporting app object to vercel
module.exports = app;
