import Express from "express";

const router = express.Router();

router.get("/", (res, req) => {
  res.send("Working");
});

export default router;
