const Product = require("../models/product");
const {
	httpCodes
} = require("../constants/backendConfig");

module.exports = {
	listProducts: function (req, res) {
		var data = req.body;
		var responseData = {
			success: false,
			msg: "Invalid params for fetching products"
		};
		Product.listProducts(data, function (err, result) {
			if (err) {
				responseData.msg = "Error in fetching products";
				return res.status(httpCodes.internalServerError).send(responseData);
			}
			responseData.success = true;
			responseData.msg ="Successfully fetched products";
			responseData.products = result;
			return res.status(httpCodes.success).send(responseData);
		});
	}
};