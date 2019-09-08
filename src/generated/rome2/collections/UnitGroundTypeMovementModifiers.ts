
import { CollectionCache, CollectionKey } from "../../../common";
import { GroundTypes } from "./GroundTypes";
import { UnitCategory } from "./UnitCategory";

export namespace UnitGroundTypeMovementModifiers {
  export const KEY = new CollectionKey("unit_ground_type_movement_modifiers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _groundType: string;
    readonly _category: string;
    readonly speedModifier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._groundType = values["ground_type"];
      this._category = values["category"];
      this.speedModifier = values["speed_modifier"];
    }
    
    get groundType(): GroundTypes.Entry | undefined {
      const collection = <GroundTypes.Entry[]>this.collectionCache.getCollection(GroundTypes.KEY, GroundTypes.Entry);
      return collection.find(entry => entry.type === this._groundType);
    }
    
    get category(): UnitCategory.Entry | undefined {
      const collection = <UnitCategory.Entry[]>this.collectionCache.getCollection(UnitCategory.KEY, UnitCategory.Entry);
      return collection.find(entry => entry.key === this._category);
    }
  }
}

export default UnitGroundTypeMovementModifiers;
