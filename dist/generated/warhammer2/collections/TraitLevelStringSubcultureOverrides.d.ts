import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterTraitLevels } from "./CharacterTraitLevels";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace TraitLevelStringSubcultureOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _traitLevel: string;
        readonly _subculture: string;
        readonly onscreenNameOverride: string;
        readonly colourTextOverride: string;
        constructor(collectionCache: CollectionCache, values: any);
        get traitLevel(): CharacterTraitLevels.Entry | undefined;
        get subculture(): CulturesSubcultures.Entry | undefined;
    }
}
export default TraitLevelStringSubcultureOverrides;
