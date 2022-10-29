import BaseInteractionEx from "../types/BaseInteractionEx";


const interactionCreate = (interaction: BaseInteractionEx) => {
    if (!interaction.isCommand()) return;
    (interaction.client.commands.get(interaction.commandName) as any).execute(interaction);
};
export default interactionCreate;