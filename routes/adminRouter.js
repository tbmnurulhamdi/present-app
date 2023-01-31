const express = require("express")
const router = express.Router()
const adminController = require("../controller/adminController")

router.get("/", adminController.index)
router.get('/users', adminController.user)
router.get("/users/create", adminController.create)
router.get("/profile", adminController.profile)
// router.post("/", adminController.store)
// router.get("/:id/edit", adminController.edit)
// router.put("/:id", adminController.update)
// router.delete("/:id", adminController.destroy)
module.exports = router
