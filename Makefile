bundle:
	browserify static/app/app.js -o static/bundle.js
	node_modules/jsmin/bin/jsmin static/bundle.js > static/bundle.min.js
