import type { Client } from "discord.js";
import fs from 'fs';

export default function RegisterEvents (client: Client) {
    const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.ts') && !file.includes("index"));

    for (const file of eventFiles) {
        const event = require(`../events/${file}`);
        const eventName = file.split('.')[0];
        client.on(eventName, event.default);
    }

    console.log(`Loaded ${eventFiles.length} events`);
}