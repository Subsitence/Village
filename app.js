/* 
    backend NodeJS + Express:
        tạo user mới
        login, logout (jwt)
        get /me
        truyền lên lat long lấy về village
*/

const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
require("dotenv").config();
const router = require("./routers/index.js");
const port = process.env.PORT || 5000;
const app = express();

const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(fileUpload());
app.use("/", router);

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port + "/api/v1");
});
