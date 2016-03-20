# ___cors_debug

To get this working,
```
npm install -g webpack
npm install -g http-server
```
and for each change,
```
webpack
```
builds the `./dist/bundle.js` file,
```
http-server -a localhost -p 37464 -o index.html
```
serves it up to be able to do stuff.
