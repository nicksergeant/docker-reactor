all:
	jsx static/src static/build
	browserify static/build/app.js -o static/dist/bundle.js
	node_modules/jsmin/bin/jsmin static/dist/bundle.js > static/dist/bundle.min.js

watch:
	fswatch -o --latency=0.1 static/src | xargs -n1 -I{all} make

.PHONY: all watch
