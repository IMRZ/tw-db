import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { CharacterTraitLevels } from "./CharacterTraitLevels";
export declare namespace StartPosCharacterTraits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _characterId: number;
        readonly _traitLevel: string;
        constructor(collectionCache: CollectionCache, values: any);
        get characterId(): StartPosCharacters.Entry | undefined;
        get traitLevel(): CharacterTraitLevels.Entry | undefined;
    }
}
export default StartPosCharacterTraits;
