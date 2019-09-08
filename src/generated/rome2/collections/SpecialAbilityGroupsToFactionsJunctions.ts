
import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityGroups } from "./SpecialAbilityGroups";
import { Factions } from "./Factions";

export namespace SpecialAbilityGroupsToFactionsJunctions {
  export const KEY = new CollectionKey("special_ability_groups_to_factions_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _abilityGroup: string;
    readonly _faction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._abilityGroup = values["ability_group"];
      this._faction = values["faction"];
    }
    
    get abilityGroup(): SpecialAbilityGroups.Entry | undefined {
      const collection = <SpecialAbilityGroups.Entry[]>this.collectionCache.getCollection(SpecialAbilityGroups.KEY, SpecialAbilityGroups.Entry);
      return collection.find(entry => entry.abilityGroup === this._abilityGroup);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
  }
}

export default SpecialAbilityGroupsToFactionsJunctions;
