import discEnv from "./discEnv";
import { REST, Routes, Client, ClientEvents } from "discord.js";

export interface I_EventHandler {
    clientEvent: keyof ClientEvents;
    action: (message: string) => void;
}

export interface I_Command {
    name: string;
    description: string;
    eventHandler: I_EventHandler;
}

export default class HaidenController {
    secret = discEnv.token();
    clientID = discEnv.clientID();
    rest = new REST({ version: "10" }).setToken(this.secret);
    client = new Client({ intents: 8 });

    constructor(commands: I_Command[]) {
        this.registerCommands(commands);
        this.registerEvents(commands);
        this.login();
    }

    registerCommands(commands: I_Command[]) {
        this.rest.put(Routes.applicationCommands(this.clientID), {
            body: commands.map((val) => {
                val.description, val.name;
            }),
        });
    }

    registerEvents(commands: I_Command[]) {
        commands.map((commands) => {
            // @ts-ignore
            this.client.on(
                commands.eventHandler.clientEvent,
                commands.eventHandler.action
            );
        });
    }

    login() {
        this.client.login(this.secret);
    }
}
