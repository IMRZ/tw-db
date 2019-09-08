import { CollectionKey } from "./CollectionKey";
export declare class CollectionCache {
    private readonly pathToDb;
    private readonly cache;
    constructor(pathToDb: string);
    loadCollection<T>(name: string, ctor: {
        new (collectionCache: CollectionCache, values: any): T;
    }): T[];
    getCollection<T>(key: CollectionKey, ctor: {
        new (collectionCache: CollectionCache, values: any): T;
    }): T[];
}
