
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitSpecialAbilities } from "./UnitSpecialAbilities";

export namespace ArmySpecialAbilities {
  export const KEY = new CollectionKey("army_special_abilities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly armySpecialAbility: string;
    readonly _unitSpecialAbility: string;
    readonly uniqueId: number;
    readonly enablesSiegeAssault: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.armySpecialAbility = values["army_special_ability"];
      this._unitSpecialAbility = values["unit_special_ability"];
      this.uniqueId = values["unique_id"];
      this.enablesSiegeAssault = !!values["enables_siege_assault"];
    }
    
    get unitSpecialAbility(): UnitSpecialAbilities.Entry | undefined {
      const collection = <UnitSpecialAbilities.Entry[]>this.collectionCache.getCollection(UnitSpecialAbilities.KEY, UnitSpecialAbilities.Entry);
      return collection.find(entry => entry._key === this._unitSpecialAbility);
    }
  }
}

export default ArmySpecialAbilities;
