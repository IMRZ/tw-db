import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsAgent } from "./CampaignBonusValueIdsAgent";
import { Agents } from "./Agents";
export declare namespace EffectBonusValueAgentJunction {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _agent: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsAgent.Entry | undefined;
        get agent(): Agents.Entry | undefined;
    }
}
export default EffectBonusValueAgentJunction;
