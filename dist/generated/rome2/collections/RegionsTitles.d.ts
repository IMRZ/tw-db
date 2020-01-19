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
        get region(): Regions.Entry | undefined;
        get government(): GovernmentTypes.Entry | undefined;
        get gender(): Genders.Entry | undefined;
    }
}
export default RegionsTitles;
