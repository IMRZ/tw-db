import { CollectionCache, CollectionKey } from "../../../common";
import { BmdExportTypes } from "./BmdExportTypes";
export declare namespace CampaignSiegeEscalationLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly level: number;
        readonly wallBreachesCount: number;
        readonly totalWallHealthLessThan: number;
        readonly wallPiecesHealth: number;
        readonly countWallPiecesHealthLessThan: number;
        readonly _bmdExportType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get bmdExportType(): BmdExportTypes.Entry | undefined;
    }
}
export default CampaignSiegeEscalationLevels;
