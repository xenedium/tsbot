require("dotenv").config();
import ClientEx from "./types/ClientEx";
import { LoadCommands } from "./commands";
import RegisterEvents from "./events";

if (!process.env.TOKEN) throw new Error("Token not found");
if (!process.env.CLIENT_ID) throw new Error("Client ID not found");



const client = new ClientEx({ intents: 0x31ffff });

RegisterEvents(client);

LoadCommands(client);

client.login(process.env.TOKEN);