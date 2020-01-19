import { CollectionCache, CollectionKey } from "../../../common";
import { CaiRegionHints } from "./CaiRegionHints";
import { CaiRegionGroups } from "./CaiRegionGroups";
export declare namespace CaiRegionHintGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _regionHintKey: string;
        readonly _regionGroupKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get regionHintKey(): CaiRegionHints.Entry | undefined;
        get regionGroupKey(): CaiRegionGroups.Entry | undefined;
    }
}
export default CaiRegionHintGroups;
