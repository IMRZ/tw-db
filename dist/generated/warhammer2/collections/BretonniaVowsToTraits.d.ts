import { CollectionCache, CollectionKey } from "../../../common";
import { BretonniaVows } from "./BretonniaVows";
import { CharacterTraits } from "./CharacterTraits";
export declare namespace BretonniaVowsToTraits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _vow: string;
        readonly _trait: string;
        readonly order: number;
        constructor(collectionCache: CollectionCache, values: any);
        get vow(): BretonniaVows.Entry | undefined;
        get trait(): CharacterTraits.Entry | undefined;
    }
}
export default BretonniaVowsToTraits;
