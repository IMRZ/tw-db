import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace MissionIssuers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly issuerKey: string;
        readonly defaultRoundsBetween: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default MissionIssuers;
