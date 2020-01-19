import { CollectionCache, CollectionKey } from "../../../common";
import { AgentSubtypes } from "./AgentSubtypes";
import { LoyaltyFactors } from "./LoyaltyFactors";
export declare namespace AgentSubtypeLoyaltyFactorJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _agentSubtype: string;
        readonly _loyaltyFactor: string;
        constructor(collectionCache: CollectionCache, values: any);
        get agentSubtype(): AgentSubtypes.Entry | undefined;
        get loyaltyFactor(): LoyaltyFactors.Entry | undefined;
    }
}
export default AgentSubtypeLoyaltyFactorJunctions;
