
import { CollectionCache, CollectionKey } from "../../../common";
import { Battles } from "./Battles";
import { BattleSkyTypes } from "./BattleSkyTypes";

export namespace BattlesToBattleSkyTypesJunctions {
  export const KEY = new CollectionKey("battles_to_battle_sky_types_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _battleKey: string;
    readonly _battleSkyTypeKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._battleKey = values["battle_key"];
      this._battleSkyTypeKey = values["battle_sky_type_key"];
    }
    
    get battleKey(): Battles.Entry | undefined {
      const collection = <Battles.Entry[]>this.collectionCache.getCollection(Battles.KEY, Battles.Entry);
      return collection.find(entry => entry.key === this._battleKey);
    }
    
    get battleSkyTypeKey(): BattleSkyTypes.Entry | undefined {
      const collection = <BattleSkyTypes.Entry[]>this.collectionCache.getCollection(BattleSkyTypes.KEY, BattleSkyTypes.Entry);
      return collection.find(entry => entry.key === this._battleSkyTypeKey);
    }
  }
}

export default BattlesToBattleSkyTypesJunctions;
