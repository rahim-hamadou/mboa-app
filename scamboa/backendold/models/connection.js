// call db
const mongoose = require("mongoose");

const connectionString = "mongodb+srv://admin:spid3rm%40n@cluster0.iq20nwc.mongodb.net/scamboa";
mongoose
	.connect(connectionString, { connectTimeoutMS: 2000 })
	.then(() => console.log("Database connected"))

	.catch((error) => console.error(error));
