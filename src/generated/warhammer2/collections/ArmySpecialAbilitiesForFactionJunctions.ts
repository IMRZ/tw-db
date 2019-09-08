
import { CollectionCache, CollectionKey } from "../../../common";
import { ArmySpecialAbilities } from "./ArmySpecialAbilities";
import { Factions } from "./Factions";

export namespace ArmySpecialAbilitiesForFactionJunctions {
  export const KEY = new CollectionKey("army_special_abilities_for_faction_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _armySpecialAbility: string;
    readonly _faction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._armySpecialAbility = values["army_special_ability"];
      this._faction = values["faction"];
    }
    
    get armySpecialAbility(): ArmySpecialAbilities.Entry | undefined {
      const collection = <ArmySpecialAbilities.Entry[]>this.collectionCache.getCollection(ArmySpecialAbilities.KEY, ArmySpecialAbilities.Entry);
      return collection.find(entry => entry.armySpecialAbility === this._armySpecialAbility);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
  }
}

export default ArmySpecialAbilitiesForFactionJunctions;
