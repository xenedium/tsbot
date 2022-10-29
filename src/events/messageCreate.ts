import type { Message } from "discord.js";
import { RegisterCommands } from "../commands";

const messageCreate = (message: Message) => {
    if (message.author.bot) return;
    if (message.content === "!register") {
        RegisterCommands(message.client, message.guildId as string);
        message.reply("Commands have been reloaded");
    }
};

export default messageCreate;