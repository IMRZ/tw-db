import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
import { Regions } from "./Regions";
export declare namespace MinisterialPositionsToRegionRestrictions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ministerialPosition: string;
        readonly _requiredRegion: string;
        constructor(collectionCache: CollectionCache, values: any);
        get ministerialPosition(): MinisterialPositions.Entry | undefined;
        get requiredRegion(): Regions.Entry | undefined;
    }
}
export default MinisterialPositionsToRegionRestrictions;
