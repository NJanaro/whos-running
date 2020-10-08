
// module.exports = {
//     mongoURI: "mongodb+srv://dev:0qyd9hAIr0m4VZnc@cluster0.n7bnc.mongodb.net/whos-running?retryWrites=true&w=majority"
// }


if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}

