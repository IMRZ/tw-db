import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { CampaignSettlementDisplaySprawlPieces } from "./CampaignSettlementDisplaySprawlPieces";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";
export declare namespace CampaignSettlementDisplayBuildingIds {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _buildingLevelKey: string;
        readonly _sprawlPieceType: string;
        readonly sprawlPieceLevel: number;
        readonly _culture: string;
        readonly _subCulture: string;
        readonly _faction: string;
        constructor(collectionCache: CollectionCache, values: any);
        get buildingLevelKey(): BuildingLevels.Entry | undefined;
        get sprawlPieceType(): CampaignSettlementDisplaySprawlPieces.Entry | undefined;
        get culture(): Cultures.Entry | undefined;
        get subCulture(): CulturesSubcultures.Entry | undefined;
        get faction(): Factions.Entry | undefined;
    }
}
export default CampaignSettlementDisplayBuildingIds;
