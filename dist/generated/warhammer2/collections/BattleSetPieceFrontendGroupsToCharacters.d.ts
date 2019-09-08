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
        readonly frontendGroup: BattleSetPieceFrontendGroups.Entry | undefined;
        readonly character: BattleSetPieceArmiesCharacters.Entry | undefined;
    }
}
export default BattleSetPieceFrontendGroupsToCharacters;
