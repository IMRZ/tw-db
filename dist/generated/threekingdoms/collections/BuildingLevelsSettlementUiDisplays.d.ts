import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BuildingLevelsSettlementUiDisplays {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly iconPath: string;
        readonly tooltip: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BuildingLevelsSettlementUiDisplays;
