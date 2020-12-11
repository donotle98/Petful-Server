const app = require("./modules/app/app");
const { PORT, CLIENT_ORIGIN } = require("./config");

app.listen(PORT, () => {
    console.log(`[petful-server] Listening on ${PORT}.`);
});
