const express = require ("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/userRoute");
const cors = require("cors");
app.use(cors());
app.use(express.json());

//Connect to mongodb database(locally)
mongoose.connect(process.env.URI)
.then(() =>{
    console.log("connected successfully");
    app.listen(process.env.PORT || 4000 , (err)=>{
        if (err) console.log(err);

        console.log("running successfully at", process.env.PORT);
    });
})
.catch((error) => {
    console.log("Failed to Connect", error);
});


app.use(userRoute);



