import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { Agents } from "./Agents";
import { AgentSubtypes } from "./AgentSubtypes";
import { Tristates } from "./Tristates";
export declare namespace FactionAgentPermittedSubtypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly _agent: string;
        readonly _subtype: string;
        readonly _maleOnly: string;
        constructor(collectionCache: CollectionCache, values: any);
        get faction(): Factions.Entry | undefined;
        get agent(): Agents.Entry | undefined;
        get subtype(): AgentSubtypes.Entry | undefined;
        get maleOnly(): Tristates.Entry | undefined;
    }
}
export default FactionAgentPermittedSubtypes;
