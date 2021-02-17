const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        mongoose
            .connect(
                "mongodb+srv://admin:admin@twitterclonecluster.vx09p.mongodb.net/TwitterCloneDB?retryWrites=true&w=majority"
            )
            .then(() => {
                console.log("DB connx successful");
            })
            .catch((err) => {
                console.log("Connex error" + err);
            });
    }
}

module.exports = new Database();
