const mongoose = require("mongoose");

const airportSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true }
},

    {
        versionKey: false,
        timestamps: true,
    }
)

const Airtport = mongoose.model("airport", airportSchema);

module.exports = Airtport