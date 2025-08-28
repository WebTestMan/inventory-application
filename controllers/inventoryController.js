exports.getUsernames = async (req, res) => {
  const usernames = await db.getAllUsernames();
  res.render("index", { title: "Homepage", usernames: usernames });
};
