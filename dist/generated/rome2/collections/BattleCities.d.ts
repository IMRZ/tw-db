import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattleCities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly city: string;
        readonly minimumBuildingScale: number;
        readonly maximumBuildingScale: number;
        readonly townMinDistance: number;
        readonly cityMinDistance: number;
        readonly townRadius: number;
        readonly cityRadius: number;
        readonly numberOfTownBuildings: number;
        readonly numberOfCityBuildings: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattleCities;
