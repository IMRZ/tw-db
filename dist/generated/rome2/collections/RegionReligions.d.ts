import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
import { Religions } from "./Religions";
export declare namespace RegionReligions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _region: string;
        readonly _religion: string;
        readonly religionZeal: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly region: Regions.Entry | undefined;
        readonly religion: Religions.Entry | undefined;
    }
}
export default RegionReligions;
