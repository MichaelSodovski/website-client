exports.userController = (req, res) => {
    res.json({
        "status": "422",
      "source": { "pointer": "/data/attributes/firstName" },
      "title":  "Invalid Attribute",
      "detail": "First name must contain at least two characters."
    })
};