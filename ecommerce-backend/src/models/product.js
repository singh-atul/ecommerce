const sqlConnection = require("../services/sqlConnection");

module.exports = {
	listProducts: function(data, callback) {
		var sql = "SELECT ID AS productId, Name AS name, Price AS price, Description  FROM Products";
		var values = [];
		if(data.categoryId) {
			sql += " WHERE CategoryId = ?"
			values.push(data.categoryId);
			if(data.query) {
				sql += " AND LOCATE('" + data.query + "', Name)";
			}
			if(data.minPrice) {
				sql += " AND Price >= " + parseInt(data.minPrice, 10);
			}
			if(data.maxPrice && parseInt(data.maxPrice, 10) > 0) {
				sql += " AND Price <= " + parseInt(data.maxPrice, 10);
			}
		} else if(data.query) {
			sql += " WHERE LOCATE('" + data.query + "', Name)";
			if(data.minPrice) {
				sql += " AND Price >= " + parseInt(data.minPrice, 10);
			}
			if(data.maxPrice && parseInt(data.maxPrice, 10) > 0) {
				sql += " AND Price <= " + parseInt(data.maxPrice, 10);
			}
		} else if (data.minPrice) {
			sql += " WHERE Price >= " + parseInt(data.minPrice, 10);
			if(data.maxPrice && parseInt(data.maxPrice, 10) > 0) {
				sql += " AND Price <= " + parseInt(data.maxPrice, 10);
			}
		} else if(data.maxPrice && parseInt(data.maxPrice, 10) > 0) {
			sql += " WHERE Price <= " + parseInt(data.maxPrice, 10);
		}
		
		sqlConnection.executeQuery(sql, values, function(err, result) {
			callback(err, result);
		});
	}

};