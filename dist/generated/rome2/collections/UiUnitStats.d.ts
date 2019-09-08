import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UiUnitStats {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreenName: string;
        readonly maxValue: number;
        readonly campaignOnly: boolean;
        readonly sortOrder: number;
        readonly tooltipText: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UiUnitStats;
