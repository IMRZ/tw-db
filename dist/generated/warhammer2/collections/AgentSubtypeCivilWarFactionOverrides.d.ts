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
        readonly secondaryFaction: FactionCivilWarSetups.Entry | undefined;
        readonly agentSubtype: AgentSubtypes.Entry | undefined;
        readonly overrideFaction: Factions.Entry | undefined;
    }
}
export default AgentSubtypeCivilWarFactionOverrides;
