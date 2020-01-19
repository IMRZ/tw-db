import { CollectionCache, CollectionKey } from "../../../common";
import { Ceos } from "./Ceos";
export declare namespace CeoToUiDisplayJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ceo: string;
        readonly maleImage: string;
        readonly femaleImage: string;
        constructor(collectionCache: CollectionCache, values: any);
        get ceo(): Ceos.Entry | undefined;
    }
}
export default CeoToUiDisplayJunctions;
