module.exports = {

  index: function(req, res, next) {
    console.log("r.s.cart", req.session.cart);
    res.status(200).json(req.session.cart);
  },
  create: function(req, res, next) {
    if (!req.session.cart) {
      req.session.cart = [];
    }
    res.req.session.cart.push(req.body);
    res.status(200).json(req.session.cart);
  }
}
