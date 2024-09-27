const mongoose = require("mongoose");
const initData = require("./data.js");
const listing = require("../listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
};

const initDB = async () => {
    await listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "66e5222a959f3d5a210881ce" }));
    await listing.insertMany(initData.data);
    console.log("data was intialized");
}

initDB();