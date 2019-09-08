import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { Agents } from "./Agents";
import { AgentSubtypes } from "./AgentSubtypes";
export declare namespace FactionAgentPermittedSubtypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly _agent: string;
        readonly _subtype: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly faction: Factions.Entry | undefined;
        readonly agent: Agents.Entry | undefined;
        readonly subtype: AgentSubtypes.Entry | undefined;
    }
}
export default FactionAgentPermittedSubtypes;
