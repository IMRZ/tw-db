
import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityGroups } from "./SpecialAbilityGroups";
import { MainUnits } from "./MainUnits";

export namespace SpecialAbilityGroupsToUnitsJunctions {
  export const KEY = new CollectionKey("special_ability_groups_to_units_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _abilityGroup: string;
    readonly _unit: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._abilityGroup = values["ability_group"];
      this._unit = values["unit"];
    }
    
    get abilityGroup(): SpecialAbilityGroups.Entry | undefined {
      const collection = <SpecialAbilityGroups.Entry[]>this.collectionCache.getCollection(SpecialAbilityGroups.KEY, SpecialAbilityGroups.Entry);
      return collection.find(entry => entry.abilityGroup === this._abilityGroup);
    }
    
    get unit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
  }
}

export default SpecialAbilityGroupsToUnitsJunctions;
