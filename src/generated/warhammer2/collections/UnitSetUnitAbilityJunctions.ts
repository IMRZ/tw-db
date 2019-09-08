
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitSets } from "./UnitSets";
import { UnitAbilities } from "./UnitAbilities";

export namespace UnitSetUnitAbilityJunctions {
  export const KEY = new CollectionKey("unit_set_unit_ability_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _unitSet: string;
    readonly _unitAbility: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._unitSet = values["unit_set"];
      this._unitAbility = values["unit_ability"];
    }
    
    get unitSet(): UnitSets.Entry | undefined {
      const collection = <UnitSets.Entry[]>this.collectionCache.getCollection(UnitSets.KEY, UnitSets.Entry);
      return collection.find(entry => entry.key === this._unitSet);
    }
    
    get unitAbility(): UnitAbilities.Entry | undefined {
      const collection = <UnitAbilities.Entry[]>this.collectionCache.getCollection(UnitAbilities.KEY, UnitAbilities.Entry);
      return collection.find(entry => entry.key === this._unitAbility);
    }
  }
}

export default UnitSetUnitAbilityJunctions;
