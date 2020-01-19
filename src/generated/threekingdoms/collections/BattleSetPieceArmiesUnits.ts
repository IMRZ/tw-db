
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";

export namespace BattleSetPieceArmiesUnits {
  export const KEY = new CollectionKey("battle_set_piece_armies_units");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly unitName: string;
    readonly _unitType: string;
    readonly percentageNumMen: number;
    readonly unitLevel: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.unitName = values["unit_name"];
      this._unitType = values["unit_type"];
      this.percentageNumMen = values["percentage_num_men"];
      this.unitLevel = values["unit_level"];
    }
    
    get unitType(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unitType);
    }
  }
}

export default BattleSetPieceArmiesUnits;
