import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace DiplomaticRelationsAttitudes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly attitude: string;
        readonly value: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default DiplomaticRelationsAttitudes;
