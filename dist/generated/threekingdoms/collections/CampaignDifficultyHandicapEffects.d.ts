import { CollectionCache, CollectionKey } from "../../../common";
import { PlayerGameDifficultyTypes } from "./PlayerGameDifficultyTypes";
import { Effects } from "./Effects";
import { Campaigns } from "./Campaigns";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
export declare namespace CampaignDifficultyHandicapEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignPlayerGameDifficultyType: string;
        readonly human: boolean;
        readonly _effect: string;
        readonly effectValue: number;
        readonly _optionalCampaignKey: string;
        readonly _effectScope: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignPlayerGameDifficultyType(): PlayerGameDifficultyTypes.Entry | undefined;
        get effect(): Effects.Entry | undefined;
        get optionalCampaignKey(): Campaigns.Entry | undefined;
        get effectScope(): CampaignEffectScopes.Entry | undefined;
    }
}
export default CampaignDifficultyHandicapEffects;
