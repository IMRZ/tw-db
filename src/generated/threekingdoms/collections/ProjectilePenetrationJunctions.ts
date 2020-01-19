
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleEntitiesSizeEnums } from "./BattleEntitiesSizeEnums";

export namespace ProjectilePenetrationJunctions {
  export const KEY = new CollectionKey("projectile_penetration_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _entitySizeCap: string;
    readonly maxPenetration: number;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._entitySizeCap = values["entity_size_cap"];
      this.maxPenetration = values["max_penetration"];
      this.description = values["description"];
    }
    
    get entitySizeCap(): BattleEntitiesSizeEnums.Entry | undefined {
      const collection = <BattleEntitiesSizeEnums.Entry[]>this.collectionCache.getCollection(BattleEntitiesSizeEnums.KEY, BattleEntitiesSizeEnums.Entry);
      return collection.find(entry => entry.key === this._entitySizeCap);
    }
  }
}

export default ProjectilePenetrationJunctions;
