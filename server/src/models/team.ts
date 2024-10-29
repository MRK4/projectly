import { InferSchemaType, model, Schema } from "mongoose";

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

type Team = InferSchemaType<typeof teamSchema>;

export default model<Team>("Team", teamSchema);
