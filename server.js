const express = require("express");
const cors = require("cors");
const path = require("path");
const enforce = require("express-sslify");
const compression = require("compression");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

if (process.env.NODE_ENV === "production") {
    app.use(compression);
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(express.static(path.join(__dirname, "client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
}

app.listen(port, (e) => {
    if (e) throw e;
    console.log(`Server running on port ${port}`);
});

app.post("/sign", (req, res) => {
    const body = {
        email: req.body.email,
    };

    console.log(JSON.stringify(body));
    console.log("SOMETHING HAPPENED");

    res.send("DONE");

    /* stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send({ error: stripeErr });
            console.log("OUPS");
        } else {
            res.status(200).send({ success: stripeRes });
        }
    }); */
});
