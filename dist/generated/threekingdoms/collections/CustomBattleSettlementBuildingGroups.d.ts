import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CustomBattleSettlementBuildingGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreenName: string;
        readonly sortOrder: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CustomBattleSettlementBuildingGroups;
