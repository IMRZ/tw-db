import { CollectionCache, CollectionKey } from "../../../common";
import { Ceos } from "./Ceos";
export declare namespace CeoAntiCeoPairs {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ceo: string;
        readonly _antiCeo: string;
        readonly autoId: number;
        constructor(collectionCache: CollectionCache, values: any);
        get ceo(): Ceos.Entry | undefined;
        get antiCeo(): Ceos.Entry | undefined;
    }
}
export default CeoAntiCeoPairs;
