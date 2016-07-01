var express = require('express');
var router = express.Router();

var formidable = require('formidable');
var app = express();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'File Upload' });
});

router.post('/upload', function (req, res) {
	// parse incoming payload (file/multipart)
	var form = new formidable.IncomingForm();

	form.parse(req, function(err, fields, files) {
		var fileSize = 0;
		if(files.anyfile.size) {
			fileSize = files.anyfile.size;
			res.send({
				fileSize: fileSize + ' bytes'
			});
			res.end();
		} else {
			res.send({
				fileSize: "Can't count, file is too big!"
			});
			res.end();
		}
  });

});

module.exports = router;