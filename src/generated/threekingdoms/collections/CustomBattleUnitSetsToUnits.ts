
import { CollectionCache, CollectionKey } from "../../../common";
import { CustomBattleUnitSets } from "./CustomBattleUnitSets";
import { MainUnits } from "./MainUnits";

export namespace CustomBattleUnitSetsToUnits {
  export const KEY = new CollectionKey("custom_battle_unit_sets_to_units");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unitSet: string;
    readonly _unitRecord: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unitSet = values["unit_set"];
      this._unitRecord = values["unit_record"];
    }
    
    get unitSet(): CustomBattleUnitSets.Entry | undefined {
      const collection = <CustomBattleUnitSets.Entry[]>this.collectionCache.getCollection(CustomBattleUnitSets.KEY, CustomBattleUnitSets.Entry);
      return collection.find(entry => entry.key === this._unitSet);
    }
    
    get unitRecord(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unitRecord);
    }
  }
}

export default CustomBattleUnitSetsToUnits;
