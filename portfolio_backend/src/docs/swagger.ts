import swaggerAutogen from "swagger-autogen";

const swagger = swaggerAutogen({
    openapi: "3.0.0",
});

const doc = {
    info: {
        title: "Portfolio API",
        description: "API for portfolio",
        version: "1.0.0",
    },
    servers: [
        {
            url: "http://localhost:6767",
        },
    ],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/index.ts"]

await swagger(outputFile, endpointsFiles, doc);