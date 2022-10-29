import ClientEx from "../types/ClientEx";

const ready = (client: ClientEx) => console.log(`Logged In as: ${client.user?.tag}`);

export default ready;