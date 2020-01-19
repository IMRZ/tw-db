import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
import { MinisterialPositionsCultureDetails } from "./MinisterialPositionsCultureDetails";
import { CeoNodes } from "./CeoNodes";
export declare namespace MinisterialPositionsToCharacterEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly ministerLevel: number;
        readonly _effect: string;
        readonly value: number;
        readonly uiId: number;
        readonly _effectScope: string;
        readonly _ministerialPositionCulturalVariant: string;
        readonly _ceoNode: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get effectScope(): CampaignEffectScopes.Entry | undefined;
        get ministerialPositionCulturalVariant(): MinisterialPositionsCultureDetails.Entry | undefined;
        get ceoNode(): CeoNodes.Entry | undefined;
    }
}
export default MinisterialPositionsToCharacterEffects;
