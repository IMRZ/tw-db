import { CollectionCache, CollectionKey } from "../../../common";
import { CulturePackIds } from "./CulturePackIds";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace CulturePacks {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _id: string;
        readonly _subculture: string;
        constructor(collectionCache: CollectionCache, values: any);
        get id(): CulturePackIds.Entry | undefined;
        get subculture(): CulturesSubcultures.Entry | undefined;
    }
}
export default CulturePacks;
