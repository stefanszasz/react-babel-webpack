var express = require('express'),
	app = express();

app.set('view engine', 'jade');
app.use('/public', express.static(__dirname + '/public'));
app.get('/', (req, res) => {
	res.sendFile('index.html', {root: __dirname });
});

app.listen(8080, () => {
	console.log('server started');
});