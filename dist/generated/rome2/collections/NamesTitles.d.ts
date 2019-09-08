import { CollectionCache, CollectionKey } from "../../../common";
import { NamesGroups } from "./NamesGroups";
import { Genders } from "./Genders";
export declare namespace NamesTitles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _nameGroup: number;
        readonly title: string;
        readonly _gender: string;
        readonly rank: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly nameGroup: NamesGroups.Entry | undefined;
        readonly gender: Genders.Entry | undefined;
    }
}
export default NamesTitles;
