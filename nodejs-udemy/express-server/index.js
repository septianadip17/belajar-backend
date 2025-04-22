import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/add", (req, res) => {
  const nums = req.query.nums;
  if (!nums) {
    return res.send("nums is required");
  }
  const numbers = nums.split(",");
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]);
  }
  res.send(sum.toString());
});
