import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieces } from "./BattleSetPieces";
export declare namespace BattleSetPieceCampaignBattleScenes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _battleSetPiece: string;
        readonly bmd: string;
        readonly environment: string;
        constructor(collectionCache: CollectionCache, values: any);
        get battleSetPiece(): BattleSetPieces.Entry | undefined;
    }
}
export default BattleSetPieceCampaignBattleScenes;
