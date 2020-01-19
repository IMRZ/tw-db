import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace DiplomaticRelationsAttitudes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly attitude: string;
        readonly min: number;
        readonly max: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default DiplomaticRelationsAttitudes;
