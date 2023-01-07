const mysql= require("mysql");
const dbConfig= require("../config/db.config.js")

const dbConnection = mysql.createConnection({
	host:dbConfig.HOST,
	user:dbConfig.USER,
	password:dbConfig.PASSWORD,
	database:dbConfig.DB

});


dbConnection.connect(error =>{
	if(error){
		throw Error;
	}
	console.log("Db Conneciton successfull ")
})

module.exports=dbConnection;