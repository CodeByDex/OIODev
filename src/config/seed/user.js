const  db = require("../connection");
const { User } = require("../../models");

db.once("open", async () => {
    await User.deleteMany({});

    User.create({})

    process.exit(0);
})