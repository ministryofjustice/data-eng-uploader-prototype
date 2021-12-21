const express = require('express')
const router = express.Router()

router.post('/database_answer', function (req, res) {
    
    var databaseType = req.session.data['database_type']
    if (databaseType == "existing"){
      res.redirect('/table_name')
    } else {
      res.redirect('/table_name_new')
    }
  })

module.exports = router
