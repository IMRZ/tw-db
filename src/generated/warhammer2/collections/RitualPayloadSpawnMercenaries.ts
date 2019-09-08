
import { CollectionCache, CollectionKey } from "../../../common";
import { RitualPayloads } from "./RitualPayloads";
import { MainUnits } from "./MainUnits";

export namespace RitualPayloadSpawnMercenaries {
  export const KEY = new CollectionKey("ritual_payload_spawn_mercenaries");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _payload: string;
    readonly _spawnableUnit: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._payload = values["payload"];
      this._spawnableUnit = values["spawnable_unit"];
    }
    
    get payload(): RitualPayloads.Entry | undefined {
      const collection = <RitualPayloads.Entry[]>this.collectionCache.getCollection(RitualPayloads.KEY, RitualPayloads.Entry);
      return collection.find(entry => entry.key === this._payload);
    }
    
    get spawnableUnit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._spawnableUnit);
    }
  }
}

export default RitualPayloadSpawnMercenaries;
