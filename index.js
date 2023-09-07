module.exports = {
    presets: [
        require("@babel/preset-env"),
        require("@babel/preset-typescript"),
        require("@babel/preset-react")
    ],
    plugins: [
        require("@babel/plugin-transform-typescript")
    ]
}