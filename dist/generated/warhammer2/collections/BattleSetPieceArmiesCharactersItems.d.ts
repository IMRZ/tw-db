import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieceArmiesCharacters } from "./BattleSetPieceArmiesCharacters";
import { Ancillaries } from "./Ancillaries";
export declare namespace BattleSetPieceArmiesCharactersItems {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _characterName: string;
        readonly _characterItem: string;
        constructor(collectionCache: CollectionCache, values: any);
        get characterName(): BattleSetPieceArmiesCharacters.Entry | undefined;
        get characterItem(): Ancillaries.Entry | undefined;
    }
}
export default BattleSetPieceArmiesCharactersItems;
