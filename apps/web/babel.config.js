const plugins = [];

if (process.env.NODE_ENV === "test") {
    plugins.push("istanbul");
    plugins.push({
        "exclude": [
            "**/*.spec.js",
            "**/*.spec.ts",
        ]
    });
}

module.exports = {
    presets: ["next/babel"],
    plugins,
};