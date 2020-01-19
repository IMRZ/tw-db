import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
export declare namespace PrefabTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly prefabType: string;
        readonly _culture: string;
        readonly value: number;
        constructor(collectionCache: CollectionCache, values: any);
        get culture(): Cultures.Entry | undefined;
    }
}
export default PrefabTypes;
