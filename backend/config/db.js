var mongoose = require('mongoose');
const Keys = require('../models/keyModel')

// make a connection 

const connectDb = () => {

    mongoose.connect(process.env.MONGO_URI);

    // get reference to database
    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));

    db.once('open', async function () {
        console.log("Connection Successful!");

        const all = await Keys.find();
        if (all.length == 0) {
            var keys = new Keys({
                keys: [
                    { key: "A", val: 1 },
                    { key: "B", val: 2 },
                    { key: "C", val: 3 },
                    { key: "D", val: 4 },
                    { key: "E", val: 5 }
                ]
            })

            // save model to database
            keys.save(function (err, book) {
                if (err) return console.error(err);
                console.log('Keys saved to db');
            });
        } else {
            console.log("success");
        }

    });
}

module.exports = connectDb;
