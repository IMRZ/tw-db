
import { CollectionCache, CollectionKey } from "../../../common";
import { Missions } from "./Missions";

export namespace MissionWeights {
  export const KEY = new CollectionKey("mission_weights");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _missionKey: string;
    readonly weight: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._missionKey = values["mission_key"];
      this.weight = values["weight"];
    }
    
    get missionKey(): Missions.Entry | undefined {
      const collection = <Missions.Entry[]>this.collectionCache.getCollection(Missions.KEY, Missions.Entry);
      return collection.find(entry => entry.key === this._missionKey);
    }
  }
}

export default MissionWeights;
