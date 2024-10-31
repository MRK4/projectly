import { InferSchemaType, model, Schema } from "mongoose";

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  members: {
    type: Array,
    ref: "User",
    default: [],
  },
});

type Team = InferSchemaType<typeof teamSchema>;

export default model<Team>("Team", teamSchema);
