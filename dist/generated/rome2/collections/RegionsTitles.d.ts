import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
import { GovernmentTypes } from "./GovernmentTypes";
import { Genders } from "./Genders";
export declare namespace RegionsTitles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _region: string;
        readonly _government: string;
        readonly _gender: string;
        readonly title: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly region: Regions.Entry | undefined;
        readonly government: GovernmentTypes.Entry | undefined;
        readonly gender: Genders.Entry | undefined;
    }
}
export default RegionsTitles;
