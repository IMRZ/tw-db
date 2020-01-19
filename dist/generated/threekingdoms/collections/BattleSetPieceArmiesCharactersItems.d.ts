import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieceArmiesCharacters } from "./BattleSetPieceArmiesCharacters";
export declare namespace BattleSetPieceArmiesCharactersItems {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _characterName: string;
        constructor(collectionCache: CollectionCache, values: any);
        get characterName(): BattleSetPieceArmiesCharacters.Entry | undefined;
    }
}
export default BattleSetPieceArmiesCharactersItems;
