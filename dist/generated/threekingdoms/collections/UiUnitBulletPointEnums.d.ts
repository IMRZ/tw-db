import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UiUnitBulletPointEnums {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreenName: string;
        readonly state: string;
        readonly sortOrder: number;
        readonly tooltip: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UiUnitBulletPointEnums;
