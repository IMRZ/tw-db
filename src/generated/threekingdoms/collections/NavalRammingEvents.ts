
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitCategory } from "./UnitCategory";

export namespace NavalRammingEvents {
  export const KEY = new CollectionKey("naval_ramming_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _rammingShip: string;
    readonly _rammedShip: string;
    readonly baseDamage: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._rammingShip = values["ramming_ship"];
      this._rammedShip = values["rammed_ship"];
      this.baseDamage = values["base_damage"];
    }
    
    get rammingShip(): UnitCategory.Entry | undefined {
      const collection = <UnitCategory.Entry[]>this.collectionCache.getCollection(UnitCategory.KEY, UnitCategory.Entry);
      return collection.find(entry => entry.key === this._rammingShip);
    }
    
    get rammedShip(): UnitCategory.Entry | undefined {
      const collection = <UnitCategory.Entry[]>this.collectionCache.getCollection(UnitCategory.KEY, UnitCategory.Entry);
      return collection.find(entry => entry.key === this._rammedShip);
    }
  }
}

export default NavalRammingEvents;
