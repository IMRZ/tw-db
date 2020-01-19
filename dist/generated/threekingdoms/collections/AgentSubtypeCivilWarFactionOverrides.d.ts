import { CollectionCache, CollectionKey } from "../../../common";
import { FactionCivilWarSetups } from "./FactionCivilWarSetups";
import { AgentSubtypes } from "./AgentSubtypes";
import { Factions } from "./Factions";
export declare namespace AgentSubtypeCivilWarFactionOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _secondaryFaction: string;
        readonly _agentSubtype: string;
        readonly _overrideFaction: string;
        constructor(collectionCache: CollectionCache, values: any);
        get secondaryFaction(): FactionCivilWarSetups.Entry | undefined;
        get agentSubtype(): AgentSubtypes.Entry | undefined;
        get overrideFaction(): Factions.Entry | undefined;
    }
}
export default AgentSubtypeCivilWarFactionOverrides;
