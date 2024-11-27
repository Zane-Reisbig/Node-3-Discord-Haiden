import HaidenController, { I_Command } from "./discBot";

const commandList: I_Command[] = [
    {
        description: "None",
        name: "None",
        eventHandler: {
            action: (msg) => {
                console.log("Client Ready");
            },
            clientEvent: "ready",
        },
    },
    {
        description: "Pings",
        name: "Ping",
        eventHandler: {
            action: (msg) => {
                console.log(msg);
            },
            clientEvent: "messageCreate",
        },
    },
];

const bot = new HaidenController(commandList);
