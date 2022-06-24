const router = require("express").Router();
const controller = require("./controller");

router.get("/banks", (req, res, next) => {
  controller
    .listBanks(req.query.name)
    .then(d => res.json(d))
    .catch(next);
});

router.get("/banks/:biscode", (req, res, next) => {
  controller
    .getBank(req.params.biscode)
    .then(d => res.json(d))
    .catch(next);
});

//TODO: enable after securing these path
// router.post("/banks", (req, res, next) => {
//   controller
//     .addBank(req.params)
//     .then(d => res.json(d.data))
//     .catch(next);
// });

// router.delete("/banks", (req, res, next) => {
//   controller
//     .removeBank(req.params)
//     .then(d => res.json(d.data))
//     .catch(next);
// });

module.exports = router;
