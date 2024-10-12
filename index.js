import express from "express";
import routes from "./src/routes/index.js";
const app = express();
const PORT = process.env.PORT | 3000;

const link = "http://localhost:" + PORT;
app.use(express.json());


app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${link}`);
});
