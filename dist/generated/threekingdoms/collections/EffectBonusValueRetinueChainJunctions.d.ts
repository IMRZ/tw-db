import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignRetinueChains } from "./CampaignRetinueChains";
import { CampaignBonusValueIdsRetinueChains } from "./CampaignBonusValueIdsRetinueChains";
export declare namespace EffectBonusValueRetinueChainJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _retinueChain: string;
        readonly _bonusValueId: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get retinueChain(): CampaignRetinueChains.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsRetinueChains.Entry | undefined;
    }
}
export default EffectBonusValueRetinueChainJunctions;
