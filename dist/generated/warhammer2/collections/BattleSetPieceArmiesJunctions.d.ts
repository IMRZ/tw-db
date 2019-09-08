import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieces } from "./BattleSetPieces";
import { BattleSetPieceArmies } from "./BattleSetPieceArmies";
export declare namespace BattleSetPieceArmiesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _battleName: string;
        readonly _armyName: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly battleName: BattleSetPieces.Entry | undefined;
        readonly armyName: BattleSetPieceArmies.Entry | undefined;
    }
}
export default BattleSetPieceArmiesJunctions;
