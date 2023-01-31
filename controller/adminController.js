// const Biodata = require("../model/Biodata")
// const admin = require("../model/admin")

module.exports = {
  index: function(req, res){
    res.render("admin/index");
    // admin.get(req.con, function(err, rows) {
    //   res.render("admin/index", { data: rows })
    // })
  },

  user: function(req, res){
    res.render("admin/users/users");
    // admin.user(req.con, function(err, rows) {
    //   res.render("admin/users/users", { data: rows })
    // })
  },

  create: function(req, res) {
    res.render("admin/users/create")
  },

  profile: function(req, res) {
    res.render("admin/profiles")
  }

  // store: function(req, res) {
  //   Biodata.create(req.con, req.body, function(err) {
  //     res.redirect("/biodata")
  //   })
  // },

  // edit: function(req, res) {
  //   Biodata.getById(req.con, req.params.id, function(err, rows) {
  //     res.render("biodata/edit", { data: rows[0] })
  //   })
  // },

  // update: function(req, res) {
  //   Biodata.update(req.con, req.body, req.params.id, function(err) {
  //     res.redirect("/biodata")
  //   })
  // },

  // destroy: function(req, res) {
  //   Biodata.destroy(req.con, req.params.id, function(err) {
  //     res.redirect("/biodata")
  //   })
  // }
}
