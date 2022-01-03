const Booking = {
  async CreateRoom(req, res) {
    try {
      var data;

      if (data && data.room === req.body.Room) {
        data = req.body;
        res.send(`room ${data.Room} already Created`);
      } else {
        data = req.body;
        res.send(`Room  ${data.Room} created Successfully`);
      }
    } catch (err) {}
  },
  async BookRoom(req, res) {
    try {
      let booking = req.body;
      if (booking && booking.room === req.body.room)
        res.send("Already booked for this room");
      else {
        res.send(`Room Booked Successfully  ${req.body.Room}`);
        booking = req.body;
      }
    } catch (err) {}
  },
  async BookingStatus(req, res) {
    try {
      let status = [
        {
          "Room Name": "101",
          Status: "Booked",
          "Customer Name": "Lakshman",
          "Start Date": "03/01/2022",
          "End Date": "04/01/2022",
        },
      ];
      res.send(status);
    } catch (err) {}
  },
  async Customers(req, res) {
    try {
      let status = [
        {
          "Customer Name": "Lakshman",
          "Room Name": "101",
          "Start Date": "03/01/2022",
          "End Date": "04/01/2022",
        },
      ];
      res.send(status);
    } catch (err) {}
  },
};
module.exports = Booking;
