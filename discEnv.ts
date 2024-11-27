require("dotenv").config();

function readEnv(key: string) {
    const val: string = process.env[key] || "";

    if (val === "") throw new Error("ENV KEY NOT FOUND");

    console.log(val);
    return val;
}

function getClientId() {
    return readEnv("DISC_CLIENT_ID");
}

function getDiscToken() {
    return readEnv("DISC_TOKEN");
}

export default {
    clientID: getClientId,
    token: getDiscToken,
};
