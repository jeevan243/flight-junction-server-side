const mongoose = require("mongoose");

const airportSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    start: { type: String, required: true },
    start_id: { type: String, required: true },
    end: { type: String, required: true },
    end_id: { type: String, required: true },
    cost: { type: String, required: true },
    start_time: { type: String, required: true },
    end_time: { type: String, required: true },
    PNR: { type: String },
    capacity: { type: Number }
},

    {
        versionKey: false,
        timestamps: true,
    }
)

const Airtport = mongoose.model("airport", airportSchema);

module.exports = Airtport