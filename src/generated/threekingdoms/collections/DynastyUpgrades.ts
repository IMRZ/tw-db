
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitSpecialAbilities } from "./UnitSpecialAbilities";
import { DynastyUpgradeTypes } from "./DynastyUpgradeTypes";

export namespace DynastyUpgrades {
  export const KEY = new CollectionKey("dynasty_upgrades");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreenName: string;
    readonly cost: number;
    readonly _abilityRecord: string;
    readonly numUses: number;
    readonly _type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreenName = values["onscreen_name"];
      this.cost = values["cost"];
      this._abilityRecord = values["ability_record"];
      this.numUses = values["num_uses"];
      this._type = values["type"];
    }
    
    get abilityRecord(): UnitSpecialAbilities.Entry | undefined {
      const collection = <UnitSpecialAbilities.Entry[]>this.collectionCache.getCollection(UnitSpecialAbilities.KEY, UnitSpecialAbilities.Entry);
      return collection.find(entry => entry._key === this._abilityRecord);
    }
    
    get type(): DynastyUpgradeTypes.Entry | undefined {
      const collection = <DynastyUpgradeTypes.Entry[]>this.collectionCache.getCollection(DynastyUpgradeTypes.KEY, DynastyUpgradeTypes.Entry);
      return collection.find(entry => entry.type === this._type);
    }
  }
}

export default DynastyUpgrades;
