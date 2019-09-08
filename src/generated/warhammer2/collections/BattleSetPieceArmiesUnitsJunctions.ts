
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieceArmies } from "./BattleSetPieceArmies";
import { BattleSetPieceArmiesUnits } from "./BattleSetPieceArmiesUnits";

export namespace BattleSetPieceArmiesUnitsJunctions {
  export const KEY = new CollectionKey("battle_set_piece_armies_units_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _armyName: string;
    readonly _unitName: string;
    readonly scriptName: string;
    readonly numberOfUnit: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._armyName = values["army_name"];
      this._unitName = values["unit_name"];
      this.scriptName = values["script_name"];
      this.numberOfUnit = values["number_of_unit"];
    }
    
    get armyName(): BattleSetPieceArmies.Entry | undefined {
      const collection = <BattleSetPieceArmies.Entry[]>this.collectionCache.getCollection(BattleSetPieceArmies.KEY, BattleSetPieceArmies.Entry);
      return collection.find(entry => entry.armyName === this._armyName);
    }
    
    get unitName(): BattleSetPieceArmiesUnits.Entry | undefined {
      const collection = <BattleSetPieceArmiesUnits.Entry[]>this.collectionCache.getCollection(BattleSetPieceArmiesUnits.KEY, BattleSetPieceArmiesUnits.Entry);
      return collection.find(entry => entry.unitName === this._unitName);
    }
  }
}

export default BattleSetPieceArmiesUnitsJunctions;
