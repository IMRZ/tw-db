
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioEntityFocusPools {
  export const KEY = new CollectionKey("audio_entity_focus_pools");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly poolName: string;
    readonly poolMinDistance: number;
    readonly poolMaxDistance: number;
    readonly poolId: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.poolName = values["pool_name"];
      this.poolMinDistance = values["pool_min_distance"];
      this.poolMaxDistance = values["pool_max_distance"];
      this.poolId = values["pool_id"];
    }
    
  }
}

export default AudioEntityFocusPools;
