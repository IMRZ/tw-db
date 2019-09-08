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
        readonly vow: BretonniaVows.Entry | undefined;
        readonly trait: CharacterTraits.Entry | undefined;
    }
}
export default BretonniaVowsToTraits;
