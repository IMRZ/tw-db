import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitBanners {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly factionOffsetX: number;
        readonly factionOffsetY: number;
        readonly factionScaleX: number;
        readonly factionScaleY: number;
        readonly unitcatOffsetX: number;
        readonly unitcatOffsetY: number;
        readonly unitcatScaleX: number;
        readonly unitcatScaleY: number;
        readonly commandStarOffsetX: number;
        readonly commandStarOffsetY: number;
        readonly armyIdOffsetY: number;
        readonly animationName: string;
        readonly unitIdOffsetY: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitBanners;
