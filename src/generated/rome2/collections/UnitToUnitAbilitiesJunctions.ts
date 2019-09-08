
import { CollectionCache, CollectionKey } from "../../../common";
import { Units } from "./Units";
import { UnitAbilities } from "./UnitAbilities";

export namespace UnitToUnitAbilitiesJunctions {
  export const KEY = new CollectionKey("unit_to_unit_abilities_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unitName: string;
    readonly _ability: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unitName = values["unit_name"];
      this._ability = values["ability"];
    }
    
    get unitName(): Units.Entry | undefined {
      const collection = <Units.Entry[]>this.collectionCache.getCollection(Units.KEY, Units.Entry);
      return collection.find(entry => entry.key === this._unitName);
    }
    
    get ability(): UnitAbilities.Entry | undefined {
      const collection = <UnitAbilities.Entry[]>this.collectionCache.getCollection(UnitAbilities.KEY, UnitAbilities.Entry);
      return collection.find(entry => entry.key === this._ability);
    }
  }
}

export default UnitToUnitAbilitiesJunctions;
