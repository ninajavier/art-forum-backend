const checkRequest = (req, res, next) => {
  const { title, artist, medium, year_created, image_url, is_favorite } =
    req.body;

  if (
    title &&
    artist &&
    medium &&
    year_created &&
    image_url &&
    typeof is_favorite === "boolean"
  ) {
    next();
  } else {
    res.status(400).json({error: "Body is missing information or body is not present at all"});
  }
};

const checkId = (req, res, next) => {
  const { id } = req.params;
  if (id && !isNaN(id)) {
    next();
  } else {
    res.status(400).json({ error: "Invalid or missing id" });
  }
};

module.exports = { checkRequest, checkId };
