import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldDeployableSiegeItems } from "./BattlefieldDeployableSiegeItems";
import { CampaignSettlementDisplaySprawlPieces } from "./CampaignSettlementDisplaySprawlPieces";
export declare namespace CampaignSettlementDisplaySiegeItemIds {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _battlefieldDeployableSiegeItem: string;
        readonly _sprawlPiece: string;
        constructor(collectionCache: CollectionCache, values: any);
        get battlefieldDeployableSiegeItem(): BattlefieldDeployableSiegeItems.Entry | undefined;
        get sprawlPiece(): CampaignSettlementDisplaySprawlPieces.Entry | undefined;
    }
}
export default CampaignSettlementDisplaySiegeItemIds;
