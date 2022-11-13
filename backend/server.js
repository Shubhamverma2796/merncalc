const express = require('express');
const app = express();
const connectDb = require('./config/db');
const keyRoutes = require('./routes/keyRoutes');
const path = require('path');
const dotenv = require('dotenv')
// const cors = require('cors');


dotenv.config();
connectDb();

const PORT = process.env.PORT || 5000;
console.log(process.env.NODE_ENV);
// --------------------------deployment------------------------------
const __dirname1 = path.resolve();

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname1, "/frontend/build")));

//     app.get("*", (req, res) =>
//         res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
//     );
// } else {
//     app.get("/", (req, res) => {
//         res.send("API is running..");
//     });
// }
// --------------------------deployment------------------------------

// -------------- Deployment -----------

// app.use(cors());
app.use(express.json());

app.use('/api/keys', keyRoutes);

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log("listening");
})
