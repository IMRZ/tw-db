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
        readonly effect: Effects.Entry | undefined;
        readonly optionalCampaignKey: Campaigns.Entry | undefined;
        readonly effectScope: CampaignEffectScopes.Entry | undefined;
    }
}
export default CampaignDifficultyHandicapEffects;
