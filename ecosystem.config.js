module.exports = {
    apps: [
        {
            name: "covidFyi",
            args: "start",
            env_production: {
                NODE_ENV: "production",
            },
            exec_mode: "cluster",
            instances: "max",
            script: "./node_modules/next/dist/bin/next",
        },
    ],
};
