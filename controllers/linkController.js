const Link = require("./../models/linkModel");

// Creating a link
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

// Geting all links
exports.getAllLinks = async (req, res) => {
  try {
    const links = await Link.find();

    res.status(200).json({
      status: "success",
      results: links.length,
      data: {
        links
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

// Geting one link
exports.getLink = async (req, res) => {
  try {
    const link = await Link.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        link
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

// Updateing a link
exports.updateLink = async (req, res) => {
  try {
    const link = await Link.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: "success ",
      data: {
        link
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

// Deleting a Link
exports.deleteLink = async (req, res) => {
  try {
    await Link.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};
