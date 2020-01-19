import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieceFrontendGroups } from "./BattleSetPieceFrontendGroups";
import { BattleSetPieceArmiesCharacters } from "./BattleSetPieceArmiesCharacters";
export declare namespace BattleSetPieceFrontendGroupsToCharacters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _frontendGroup: string;
        readonly _character: string;
        constructor(collectionCache: CollectionCache, values: any);
        get frontendGroup(): BattleSetPieceFrontendGroups.Entry | undefined;
        get character(): BattleSetPieceArmiesCharacters.Entry | undefined;
    }
}
export default BattleSetPieceFrontendGroupsToCharacters;
