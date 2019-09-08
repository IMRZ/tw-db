import { CollectionCache, CollectionKey } from "../../../common";
import { HistoricalCharacters } from "./HistoricalCharacters";
import { CharacterTraitLevels } from "./CharacterTraitLevels";
export declare namespace HistoricalCharacterTraits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _character: string;
        readonly _trait: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly character: HistoricalCharacters.Entry | undefined;
        readonly trait: CharacterTraitLevels.Entry | undefined;
    }
}
export default HistoricalCharacterTraits;
