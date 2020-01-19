import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterTraitLevels } from "./CharacterTraitLevels";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
export declare namespace TraitLevelEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _traitLevel: string;
        readonly _effect: string;
        readonly value: number;
        readonly _effectScope: string;
        constructor(collectionCache: CollectionCache, values: any);
        get traitLevel(): CharacterTraitLevels.Entry | undefined;
        get effect(): Effects.Entry | undefined;
        get effectScope(): CampaignEffectScopes.Entry | undefined;
    }
}
export default TraitLevelEffects;
