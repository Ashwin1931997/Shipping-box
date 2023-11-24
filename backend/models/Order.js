const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
    {
        name: String,
        weight: Number,
        color: String,
        country: String
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Order", orderSchema);