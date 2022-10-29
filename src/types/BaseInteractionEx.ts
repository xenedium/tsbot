import { BaseInteraction } from "discord.js";
import ClientEx from "../types/ClientEx";

type BaseInteractionEx = BaseInteraction & {
    client: ClientEx;
}

export default BaseInteractionEx;