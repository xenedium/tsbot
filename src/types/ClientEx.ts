import { Client, Collection } from "discord.js";

export default class ClientEx extends Client {
    public commands = new Collection();
}