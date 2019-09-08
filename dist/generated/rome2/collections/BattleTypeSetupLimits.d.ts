import { CollectionCache, CollectionKey } from "../../../common";
import { BattleTypes } from "./BattleTypes";
export declare namespace BattleTypeSetupLimits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _battleType: string;
        readonly weightingType: string;
        readonly armySize: string;
        readonly era: string;
        readonly maxInfantry: number;
        readonly maxCavalry: number;
        readonly maxArtillery: number;
        readonly maxSmallShip: number;
        readonly maxFrigate: number;
        readonly maxLineOfBattle: number;
        readonly id: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly battleType: BattleTypes.Entry | undefined;
    }
}
export default BattleTypeSetupLimits;
