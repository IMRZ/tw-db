import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
export declare namespace ElectorCountRegionToCapitalRegionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _region: string;
        readonly _capitalRegion: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly region: Regions.Entry | undefined;
        readonly capitalRegion: Regions.Entry | undefined;
    }
}
export default ElectorCountRegionToCapitalRegionJunctions;
