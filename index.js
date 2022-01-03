const express = require("express");
const BookingRouter = require("./Routes/Booking.Routes");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/Room", BookingRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
