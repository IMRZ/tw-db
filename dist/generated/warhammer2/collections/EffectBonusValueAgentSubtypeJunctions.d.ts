import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsAgentSubtypes } from "./CampaignBonusValueIdsAgentSubtypes";
import { AgentSubtypes } from "./AgentSubtypes";
export declare namespace EffectBonusValueAgentSubtypeJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _subtype: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsAgentSubtypes.Entry | undefined;
        readonly subtype: AgentSubtypes.Entry | undefined;
    }
}
export default EffectBonusValueAgentSubtypeJunctions;
