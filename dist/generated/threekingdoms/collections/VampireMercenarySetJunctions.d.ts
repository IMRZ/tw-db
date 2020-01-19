import { CollectionCache, CollectionKey } from "../../../common";
import { MercenaryPools } from "./MercenaryPools";
export declare namespace VampireMercenarySetJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _mercenarySet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get mercenarySet(): MercenaryPools.Entry | undefined;
    }
}
export default VampireMercenarySetJunctions;
