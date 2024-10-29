import { InferSchemaType, model, Schema, Types } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    select: false,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  avatarUrl: {
    type: String,
    default: null, // Permet d'être nullable si l'utilisateur ne souhaite pas ajouter d'avatar
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  teamId: {
    type: Types.ObjectId,
    ref: "Team", // Référence à la collection des équipes
    default: null,
  },
});

type User = InferSchemaType<typeof userSchema>;

export default model<User>("User", userSchema);
