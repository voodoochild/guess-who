export default {
    entry   : "app/main.js",
    plugins : [
        require("rollup-plugin-includepaths")({
            paths      : [ "app" ],
            extensions : [ ".js", ".css" ]
        }),
        require("rollup-plugin-node-resolve")({ ignoreGlobal : true }),
        require("rollup-plugin-commonjs")(),
        require("modular-css/rollup")({ css : "app/gen/app.css" }),
        require("rollup-plugin-buble")()
    ],
    format : "iife",
    dest   : "app/gen/app.js",
};
