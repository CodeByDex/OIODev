const  {mongooseConnection} = require("../connection");
const { User } = require("../../models");

mongooseConnection.once("open", async () => {
    await User.deleteMany({});

    User.create({})

    process.exit(0);
});