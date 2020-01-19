import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { Campaigns } from "./Campaigns";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
export declare namespace CampaignDifficultyHandicapEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly campaignDifficultyHandicap: number;
        readonly human: boolean;
        readonly _effect: string;
        readonly effectValue: number;
        readonly _optionalCampaignKey: string;
        readonly _effectScope: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get optionalCampaignKey(): Campaigns.Entry | undefined;
        get effectScope(): CampaignEffectScopes.Entry | undefined;
    }
}
export default CampaignDifficultyHandicapEffects;
