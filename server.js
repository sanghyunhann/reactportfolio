const express = require("express");
const path = require("path");

const app = express();

app.set("port", process.env.PORT || 3000);

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중..");
});
