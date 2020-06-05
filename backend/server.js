const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

const LOGIN = "admin";
const PASSWORD = "admin";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF5bGFuQGJvc2Nhcmluby5jb20iLCJwYXNzd29yZCI6InlhMGdzcWh5NHd6dnV2YjQifQ.yN_8-Mge9mFgsnYHnPEh_ZzNP7YKvSbQ3Alug9HMCsM";

server.post("/login", (req, res) => {
  const { login, password } = req.body;

  if (login === LOGIN && password === PASSWORD) {
    return res.json({
      token: TOKEN,
    });
  }

  return res.json({
    error: "Ops! the credentials are incorrect.",
  });
});

server.listen(3333);
