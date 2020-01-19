import { CollectionCache, CollectionKey } from "../../../common";
import { CaptiveOptionEffectSets } from "./CaptiveOptionEffectSets";
import { CaptiveOptionEffectScopes } from "./CaptiveOptionEffectScopes";
import { CharacterRelationships } from "./CharacterRelationships";
import { CaptiveOptionEffects } from "./CaptiveOptionEffects";
export declare namespace CaptiveOptionRelatedCharacterEffectSetItems {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effectSet: string;
        readonly _scope: string;
        readonly _relationship: string;
        readonly _effects: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effectSet(): CaptiveOptionEffectSets.Entry | undefined;
        get scope(): CaptiveOptionEffectScopes.Entry | undefined;
        get relationship(): CharacterRelationships.Entry | undefined;
        get effects(): CaptiveOptionEffects.Entry | undefined;
    }
}
export default CaptiveOptionRelatedCharacterEffectSetItems;
