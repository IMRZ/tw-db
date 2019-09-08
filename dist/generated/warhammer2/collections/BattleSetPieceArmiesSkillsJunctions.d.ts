import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieceArmies } from "./BattleSetPieceArmies";
import { Ancillaries } from "./Ancillaries";
export declare namespace BattleSetPieceArmiesSkillsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _armyName: string;
        readonly _armySkill: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly armyName: BattleSetPieceArmies.Entry | undefined;
        readonly armySkill: Ancillaries.Entry | undefined;
    }
}
export default BattleSetPieceArmiesSkillsJunctions;
