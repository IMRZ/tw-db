
import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityGroups } from "./SpecialAbilityGroups";
import { UnitSpecialAbilities } from "./UnitSpecialAbilities";

export namespace SpecialAbilityGroupsToUnitAbilitiesJunctions {
  export const KEY = new CollectionKey("special_ability_groups_to_unit_abilities_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _specialAbilityGroups: string;
    readonly _unitSpecialAbilities: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._specialAbilityGroups = values["special_ability_groups"];
      this._unitSpecialAbilities = values["unit_special_abilities"];
    }
    
    get specialAbilityGroups(): SpecialAbilityGroups.Entry | undefined {
      const collection = <SpecialAbilityGroups.Entry[]>this.collectionCache.getCollection(SpecialAbilityGroups.KEY, SpecialAbilityGroups.Entry);
      return collection.find(entry => entry.abilityGroup === this._specialAbilityGroups);
    }
    
    get unitSpecialAbilities(): UnitSpecialAbilities.Entry | undefined {
      const collection = <UnitSpecialAbilities.Entry[]>this.collectionCache.getCollection(UnitSpecialAbilities.KEY, UnitSpecialAbilities.Entry);
      return collection.find(entry => entry._key === this._unitSpecialAbilities);
    }
  }
}

export default SpecialAbilityGroupsToUnitAbilitiesJunctions;
