import { CollectionCache, CollectionKey } from "../../../common";
import { Resources } from "./Resources";
export declare namespace Commodities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly baselinePricePerUnit: number;
        constructor(collectionCache: CollectionCache, values: any);
        get key(): Resources.Entry | undefined;
    }
}
export default Commodities;
