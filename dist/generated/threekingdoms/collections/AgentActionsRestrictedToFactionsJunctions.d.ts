import { CollectionCache, CollectionKey } from "../../../common";
import { AgentActions } from "./AgentActions";
import { Factions } from "./Factions";
export declare namespace AgentActionsRestrictedToFactionsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _agentActionId: string;
        readonly _restrictedToFaction: string;
        constructor(collectionCache: CollectionCache, values: any);
        get agentActionId(): AgentActions.Entry | undefined;
        get restrictedToFaction(): Factions.Entry | undefined;
    }
}
export default AgentActionsRestrictedToFactionsJunctions;
