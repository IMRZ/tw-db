import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieceArmies } from "./BattleSetPieceArmies";
import { BattleSetPieceArmiesCharacters } from "./BattleSetPieceArmiesCharacters";
export declare namespace BattleSetPieceArmiesCharactersJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _armyName: string;
        readonly _characterName: string;
        readonly scriptName: string;
        constructor(collectionCache: CollectionCache, values: any);
        get armyName(): BattleSetPieceArmies.Entry | undefined;
        get characterName(): BattleSetPieceArmiesCharacters.Entry | undefined;
    }
}
export default BattleSetPieceArmiesCharactersJunctions;
