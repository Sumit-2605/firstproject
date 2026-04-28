const Reservation = require("../models/Reservation");
exports.createReservation = async(req,res)=>{
    try{
            const{name,number,date,time,guests} = req.body;

            if(!name ||!number || !date ||!time || !guests)
            {
                return res.status(400).json({message:"all fieds are required"})
            }
                     const reservation = await Reservation.create({
      name,
      number,
      date,
      time,
      guest
    });

    res.status(201).json({
      message: "Reservation successful",
      reservation
    });
    }
    catch(error)
    {
  res.status(500).json({ message: err.message });
    }
}