import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieceArmies } from "./BattleSetPieceArmies";
export declare namespace BattleSetPieceArmiesSkillsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _armyName: string;
        constructor(collectionCache: CollectionCache, values: any);
        get armyName(): BattleSetPieceArmies.Entry | undefined;
    }
}
export default BattleSetPieceArmiesSkillsJunctions;
