
import { CollectionCache, CollectionKey } from "../../../common";
import { EndTurnNotifications } from "./EndTurnNotifications";
import { PooledResources } from "./PooledResources";

export namespace EndTurnNotificationsPooledResourceJunctions {
  export const KEY = new CollectionKey("end_turn_notifications_pooled_resource_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _endTurnNotification: string;
    readonly _pooledResource: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._endTurnNotification = values["end_turn_notification"];
      this._pooledResource = values["pooled_resource"];
    }
    
    get endTurnNotification(): EndTurnNotifications.Entry | undefined {
      const collection = <EndTurnNotifications.Entry[]>this.collectionCache.getCollection(EndTurnNotifications.KEY, EndTurnNotifications.Entry);
      return collection.find(entry => entry.key === this._endTurnNotification);
    }
    
    get pooledResource(): PooledResources.Entry | undefined {
      const collection = <PooledResources.Entry[]>this.collectionCache.getCollection(PooledResources.KEY, PooledResources.Entry);
      return collection.find(entry => entry.key === this._pooledResource);
    }
  }
}

export default EndTurnNotificationsPooledResourceJunctions;
