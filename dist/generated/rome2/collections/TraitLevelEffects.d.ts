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
        readonly traitLevel: CharacterTraitLevels.Entry | undefined;
        readonly effect: Effects.Entry | undefined;
        readonly effectScope: CampaignEffectScopes.Entry | undefined;
    }
}
export default TraitLevelEffects;
