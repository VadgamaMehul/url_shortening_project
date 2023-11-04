const url_shortner_db = require("../Model/url_shortner_db");
const { shortUrlJoiSchema } = require("../Validation/shortUrlJoi");

//routes
const router = require("express").Router();

router.get("/", async (req, res) => {
  const shortUrls = await url_shortner_db.find();
  res.render("index", { shortUrls: shortUrls });
});

//Post
router.post("/shortUrls", async (req, res) => {
  try {
    const existingShortUrl = await url_shortner_db.findOne({
      full: req.body.fullUrl,
    });
    if (!existingShortUrl) {
      await url_shortner_db.create({ full: req.body.fullUrl });
      res.redirect("/");
    } else {
      //SEND RESPONCE
      return res.status(409).redirect("/");
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
});

//redirect
router.get("/:shortUrl", async (req, res) => {
  const shortUrl = await url_shortner_db.findOne({
    short: req.params.shortUrl,
  });
  if (shortUrl == null) return res.sendStatus(404);
  shortUrl.clicks++;
  shortUrl.save();
  res.redirect(shortUrl.full);
});

//delete
router.delete("/remove/:id", async (req, res) => {
  try {
    const removeResult = await url_shortner_db.findByIdAndRemove(req.params.id);
    if (!removeResult) {
      return res.status(404).send("No Task Found");
    }
    res.send(`Deleted ${removeResult}`);
  } catch (err) {
    console.log("Error in deleting the data : ", err);
    res.status(500).send("Server Error");
  }
});

router.get("/*", (req, res) => {
  res.send("Page is not Found");
});

module.exports = router;
