import mongoose from "mongoose";
const { Schema } = mongoose;

export const rentalPropertySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  
  city: {
    type: String,
    required: true
  },
  
  pricePerNight: {
    type: Number,
    required: true
  },
  numBedrooms: {
    type: Number,
    required: true
  },
  numBathrooms: {
    type: Number,
    required: true
  },
  
  createdAt: {
    type: Date,
    default: Date.now
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  }
});

export default mongoose.model("properties",rentalPropertySchema)
