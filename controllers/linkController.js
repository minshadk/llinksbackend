const Link = require("./../models/linkModel");

exports.createLink = async (req, res) => {
  try {
    console.log(req.body);

    const newLink = await Link.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        link: newLink
      }
    });
  } catch (err) {
    console.log(reg.body);
    res.status(400).json({
      status: "failed",
      message: "Invalid data send"
    });
  }
};
