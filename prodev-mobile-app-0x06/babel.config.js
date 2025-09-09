module.exports = function (api) {
    api.catch(true); 
    return {
        presets: [
            ["babel-preset-expo", { jsxImportSource: "nativewind"}],
            "nativewind/babel"
        ]
    }
}