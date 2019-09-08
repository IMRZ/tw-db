import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
export declare namespace BattleSetPieceArmiesUnits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly unitName: string;
        readonly _unitType: string;
        readonly percentageNumMen: number;
        readonly unitLevel: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly unitType: MainUnits.Entry | undefined;
    }
}
export default BattleSetPieceArmiesUnits;
