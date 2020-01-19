
import { CollectionCache, CollectionKey } from "../../../common";
import { LandUnits } from "./LandUnits";
import { UnitAbilities } from "./UnitAbilities";

export namespace LandUnitsToUnitAbilitesJunctions {
  export const KEY = new CollectionKey("land_units_to_unit_abilites_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _landUnit: string;
    readonly _ability: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._landUnit = values["land_unit"];
      this._ability = values["ability"];
    }
    
    get landUnit(): LandUnits.Entry | undefined {
      const collection = <LandUnits.Entry[]>this.collectionCache.getCollection(LandUnits.KEY, LandUnits.Entry);
      return collection.find(entry => entry.key === this._landUnit);
    }
    
    get ability(): UnitAbilities.Entry | undefined {
      const collection = <UnitAbilities.Entry[]>this.collectionCache.getCollection(UnitAbilities.KEY, UnitAbilities.Entry);
      return collection.find(entry => entry.key === this._ability);
    }
  }
}

export default LandUnitsToUnitAbilitesJunctions;
