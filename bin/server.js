const mongoose = require("mongoose");
const app = require("../app");

const { PORT = 3000, DB_USER, DB_USER_PASS, DB_NAME } = process.env;
const DB_HOST = `mongodb+srv://${DB_USER}:${DB_USER_PASS}@cluster0.ssl2o.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => {
      console.log("Database connection successful");
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
