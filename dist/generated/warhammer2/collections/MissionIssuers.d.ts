import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace MissionIssuers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly issuerKey: string;
        readonly iconPath: string;
        readonly onScreenName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default MissionIssuers;
