import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
import { MinisterialPositionsCultureDetails } from "./MinisterialPositionsCultureDetails";
export declare namespace MinisterialPositionsToEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly ministerLevel: number;
        readonly _effect: string;
        readonly value: number;
        readonly uiId: number;
        readonly _effectScope: string;
        readonly _ministerialPositionCulturalVariant: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get effectScope(): CampaignEffectScopes.Entry | undefined;
        get ministerialPositionCulturalVariant(): MinisterialPositionsCultureDetails.Entry | undefined;
    }
}
export default MinisterialPositionsToEffects;
