import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
export declare namespace CultureSettlementOccupationOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _culture: string;
        readonly option: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly culture: Cultures.Entry | undefined;
    }
}
export default CultureSettlementOccupationOptions;
