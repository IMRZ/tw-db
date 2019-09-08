
import { CollectionCache, CollectionKey } from "../../../common";
import { SpawnableForces } from "./SpawnableForces";
import { MainUnits } from "./MainUnits";

export namespace SpawnableForceUnitJunctions {
  export const KEY = new CollectionKey("spawnable_force_unit_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _spawnableForce: string;
    readonly _unit: string;
    readonly minXp: number;
    readonly maxXp: number;
    readonly minAmount: number;
    readonly maxAmount: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._spawnableForce = values["spawnable_force"];
      this._unit = values["unit"];
      this.minXp = values["min_xp"];
      this.maxXp = values["max_xp"];
      this.minAmount = values["min_amount"];
      this.maxAmount = values["max_amount"];
    }
    
    get spawnableForce(): SpawnableForces.Entry | undefined {
      const collection = <SpawnableForces.Entry[]>this.collectionCache.getCollection(SpawnableForces.KEY, SpawnableForces.Entry);
      return collection.find(entry => entry.key === this._spawnableForce);
    }
    
    get unit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
  }
}

export default SpawnableForceUnitJunctions;
