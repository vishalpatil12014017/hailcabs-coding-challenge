const options = {
	DB: {
		HOST: "localhost",
		USER: "root",
		PASSWORD: "Vish@l1718",
		DB: "testDb",
		dialect: "mysql",
		pool: {
		  max: 5,
		  min: 0,
		  acquire: 30000,
		  idle: 10000,
		},
	  },
};
module.exports = options;
