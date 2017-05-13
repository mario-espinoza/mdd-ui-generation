
var path = require('path');

module.exports = {
	entry: "_wr_root",
	resolve: {
		root: [
			path.join(__dirname, "src"),
			
				"C:\\WebRatio\\WebRatio Mobile Platform Community 8.9.7\\WebRatio\\plugins\\com.webratio.generator.mobile_8.9.7.201612231218\\BuiltinComponents\\src"
			,
				"C:\\WebRatio\\WebRatio Mobile Platform Community 8.9.7\\WebRatio\\plugins\\com.webratio.components.mobile.validation_8.9.7.201612231218\\src"
			,
				"C:\\WebRatio\\WebRatio Mobile Platform Community 8.9.7\\WebRatio\\plugins\\com.webratio.components.mobile.operation_8.9.7.201612231218\\src"
			,
				"C:\\WebRatio\\WebRatio Mobile Platform Community 8.9.7\\WebRatio\\plugins\\com.webratio.components.mobile.content_8.9.7.201612231218\\src"
			
		]
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: [ /node_modules/ ],
			loader: "babel-loader",
			query: {
				whitelist: "es6.modules"
			}
		}]
	},
	resolveLoader: {
		root: [
			path.join("C:\\WebRatio\\WebRatio Mobile Platform Community 8.9.7\\WebRatio\\Nodejs", "node_modules")
		]
	}
};
