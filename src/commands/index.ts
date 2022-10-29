import fs from 'fs';
import { Client, Collection, REST, Routes } from "discord.js";
import ClientEx from '../types/ClientEx';


export function RegisterCommands(client: Client, guildId: string) {
    const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.ts') && !file.includes("index"));

    const commands = commandFiles.map(file => {
        const command = require(`../commands/${file}`);
        return command.default.data.toJSON();
    });

    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN  as string);

    (async () => {
        try {
            console.log(`Started refreshing ${commands.length} application (/) commands.`);
    
            const data = await rest.put(
                Routes.applicationGuildCommands(process.env.CLIENT_ID as string, guildId),
                { body: commands },
            );
    
            console.log(`Successfully reloaded ${(data as any).length} application (/) commands.`);
        } catch (error) {
            console.error(error);
        }
    })();
}

export function LoadCommands(client: ClientEx) {
    const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.ts') && !file.includes("index"));
    

    client.commands = new Collection();

    for (const file of commandFiles) {
        const command = require(`../commands/${file}`);
        client.commands.set(command.default.data.name, command.default);
    }


}