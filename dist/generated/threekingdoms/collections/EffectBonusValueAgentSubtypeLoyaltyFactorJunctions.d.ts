import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsAgentSubtypeLoyaltyFactorJunctions } from "./CampaignBonusValueIdsAgentSubtypeLoyaltyFactorJunctions";
import { AgentSubtypeLoyaltyFactorJunctions } from "./AgentSubtypeLoyaltyFactorJunctions";
export declare namespace EffectBonusValueAgentSubtypeLoyaltyFactorJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _agentSubtypeLoyaltyFactorJunction: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsAgentSubtypeLoyaltyFactorJunctions.Entry | undefined;
        get agentSubtypeLoyaltyFactorJunction(): AgentSubtypeLoyaltyFactorJunctions.Entry | undefined;
    }
}
export default EffectBonusValueAgentSubtypeLoyaltyFactorJunctions;
