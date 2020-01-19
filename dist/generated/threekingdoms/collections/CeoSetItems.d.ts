import { CollectionCache, CollectionKey } from "../../../common";
import { CeoSets } from "./CeoSets";
import { Ceos } from "./Ceos";
export declare namespace CeoSetItems {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ceoSet: string;
        readonly _ceo: string;
        constructor(collectionCache: CollectionCache, values: any);
        get ceoSet(): CeoSets.Entry | undefined;
        get ceo(): Ceos.Entry | undefined;
    }
}
export default CeoSetItems;
