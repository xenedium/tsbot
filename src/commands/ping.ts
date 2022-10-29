import { SlashCommandBuilder } from "discord.js";
import type { CommandInteraction } from "discord.js";

export default {
    data: new SlashCommandBuilder().setName('ping').setDescription("Ping command to test if the bot is working !"),
    async execute(interaction: CommandInteraction) {
        await interaction.reply(`
            My latency is ${interaction.client.ws.ping}ms
        `);
    }
}