var convert = require('../index.js'),
    fs = require("fs");

function convertHtml(name) {
    fs.readFile('./test/' + name + '.html', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        convert(data, function (err, pdf) {
            if (err) {
                console.log(err);
                return;
            }
            pdf.stream.pipe(fs.createWriteStream('./test/' + name + '.pdf'));
        });
    });
}

convertHtml('test');