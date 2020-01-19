import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace ProjectileBombardmentLaunchSources {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly suggestedLaunchSource: string;
        readonly description: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default ProjectileBombardmentLaunchSources;
