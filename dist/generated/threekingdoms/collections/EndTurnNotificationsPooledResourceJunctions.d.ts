import { CollectionCache, CollectionKey } from "../../../common";
import { EndTurnNotifications } from "./EndTurnNotifications";
import { PooledResources } from "./PooledResources";
export declare namespace EndTurnNotificationsPooledResourceJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _endTurnNotification: string;
        readonly _pooledResource: string;
        constructor(collectionCache: CollectionCache, values: any);
        get endTurnNotification(): EndTurnNotifications.Entry | undefined;
        get pooledResource(): PooledResources.Entry | undefined;
    }
}
export default EndTurnNotificationsPooledResourceJunctions;
