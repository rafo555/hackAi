const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const multer = require('multer');
const fs = require('fs');
const util = require('util');

const app = express();

app.listen(process.env.NODE_PORT || 3400, () =>
    console.log(`Server is running ${process.env.NODE_PORT || 3400}`)
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.locals.request = (() => {
    const request = require('request');
    return {
        get: util.promisify(request.get),
        post: util.promisify(request.post),
        put: util.promisify(request.put),
        delete: util.promisify(request.delete)
    };
})();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'tmp');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

app.post('*', upload.single('image'), async (req, res) => {


    console.log(req.file, req.path);

    const response = await app.locals.request.post('https://aihackathon.picsart.com/' + req.path, {
        json: true,
        // mode: 'no-cors',
        headers: {
            Authorization: 'Bearer 5HBZmENO488Lky5m4XuF1uqGFEvemHw2'
        },
        formData: {
            image: {
                value: fs.createReadStream(req.file.path),
                options: {
                    filename: req.file.filename
                }
            }
        }
    });

    if (!response || !response.body || response.body.status !== 'success' || !response.body.data) {
        console.log('upload Magic Photo error', response.body);

        throw 'Something went wrong';
    }

    res.send({
        ...response.body.data
    });
});

app.get('*', async (req, res) => {

    console.log(req.path);

    const response = await app.locals.request.get('https://aihackathon.picsart.com/' + req.path + '?segmentation_class=' + req.query.segmentation_class, {
        json: true,
        // mode: 'no-cors',
        headers: {
            Authorization: 'Bearer 5HBZmENO488Lky5m4XuF1uqGFEvemHw2'
        }
    });

    if (!response || !response.body || response.body.status !== 'success' || !response.body.data) {
        console.log('upload Magic Photo error', response.body);

        throw 'Something went wrong';
    }

    res.send({
        ...response.body.data
    });
});