import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieceArmies } from "./BattleSetPieceArmies";
import { BattleSetPieceArmiesUnits } from "./BattleSetPieceArmiesUnits";
export declare namespace BattleSetPieceArmiesUnitsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _armyName: string;
        readonly _unitName: string;
        readonly scriptName: string;
        readonly numberOfUnit: number;
        constructor(collectionCache: CollectionCache, values: any);
        get armyName(): BattleSetPieceArmies.Entry | undefined;
        get unitName(): BattleSetPieceArmiesUnits.Entry | undefined;
    }
}
export default BattleSetPieceArmiesUnitsJunctions;
