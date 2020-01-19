import { CollectionCache, CollectionKey } from "../../../common";
import { CaptiveOptionSets } from "./CaptiveOptionSets";
import { CaptiveOptions } from "./CaptiveOptions";
export declare namespace CaptiveOptionSetItems {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _set: string;
        readonly _item: string;
        constructor(collectionCache: CollectionCache, values: any);
        get set(): CaptiveOptionSets.Entry | undefined;
        get item(): CaptiveOptions.Entry | undefined;
    }
}
export default CaptiveOptionSetItems;
