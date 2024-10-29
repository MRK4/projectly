import "dotenv/config";
import express from "express";
import userRoutes from "./routes/users";
import session from "express-session";
import env from "./util/validateEnv";
import MongoStore from "connect-mongo";
import cors from "cors";

const app = express();

// Middlewares
app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());

app.use(
  session({
    name: "sid", // the name of the cookie that will store the session ID
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
      sameSite: "lax",
      httpOnly: true,
    },
    rolling: true,
    store: MongoStore.create({
      mongoUrl: env.MONGO_URL,
    }),
  })
);

// Routes
app.use("/api/users", userRoutes);

app.get("/api", (req, res) => {
  res.send("The API is working!");
});

export default app;
