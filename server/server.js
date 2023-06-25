const express = require("express");
const path = require("path");
const routes = require("./routes");
const db = require("./config/connection");

const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const { start } = require("repl");

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers
});

app.use(express.urlencoded({extended: false}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use(routes);

async function startApolloServer() {
    await server.start();
    server.applyMiddleware({app});

    db.once("open", () => {
        app.listen(PORT, () => {
            console.log(`App Now Running on ${PORT}`)
        });
    })
}

startApolloServer();