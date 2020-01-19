import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattlefieldBuildingCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly category: string;
        readonly _defaultDestructionEffect: any;
        readonly iconPath: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattlefieldBuildingCategories;
