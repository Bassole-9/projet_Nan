import { Schema, model } from "mongoose";

const userSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },

  prenom: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  motDePasse: {
    type: String,
    required: true,
  },
});

export default model("User", userSchema);
