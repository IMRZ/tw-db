import { CollectionCache, CollectionKey } from "../../../common";
import { NamesGroups } from "./NamesGroups";
import { NameTypes } from "./NameTypes";
import { Genders } from "./Genders";
export declare namespace Names {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _namesGroup: number;
        readonly name: string;
        readonly _type: string;
        readonly _gender: string;
        readonly frequency: number;
        readonly nobility: boolean;
        readonly id: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly namesGroup: NamesGroups.Entry | undefined;
        readonly type: NameTypes.Entry | undefined;
        readonly gender: Genders.Entry | undefined;
    }
}
export default Names;
