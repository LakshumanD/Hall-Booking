const Router = require("express").Router();
const Booking = require("../Services/Booking.services");

Router.post("/CreateRoom", Booking.CreateRoom);
Router.post("/BookRoom", Booking.BookRoom);
Router.get("/Status", Booking.BookingStatus);
Router.get("/Customers", Booking.Customers);
module.exports = Router;
