
import { CollectionCache, CollectionKey } from "../../../common";
import { UiUnitStats } from "./UiUnitStats";
import { UnitStatModifiersHowEnums } from "./UnitStatModifiersHowEnums";

export namespace UnitStatModifiers {
  export const KEY = new CollectionKey("unit_stat_modifiers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _stat: string;
    readonly _how: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._stat = values["stat"];
      this._how = values["how"];
    }
    
    get stat(): UiUnitStats.Entry | undefined {
      const collection = <UiUnitStats.Entry[]>this.collectionCache.getCollection(UiUnitStats.KEY, UiUnitStats.Entry);
      return collection.find(entry => entry.key === this._stat);
    }
    
    get how(): UnitStatModifiersHowEnums.Entry | undefined {
      const collection = <UnitStatModifiersHowEnums.Entry[]>this.collectionCache.getCollection(UnitStatModifiersHowEnums.KEY, UnitStatModifiersHowEnums.Entry);
      return collection.find(entry => entry.key === this._how);
    }
  }
}

export default UnitStatModifiers;
