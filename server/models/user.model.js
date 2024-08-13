import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is Required !"],
    unique: [true, "Email must be Unique !"],
  },
  name: {
    type: String,
    required: [true, "Email is Required !"],
  },
  password: {
    type: String,
    required: [true, "Password is Required !"],
  },
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "todo",
    },
  ],
});

export default mongoose.model("user", userSchema);
