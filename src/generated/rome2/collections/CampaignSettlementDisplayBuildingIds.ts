
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { CampaignSettlementDisplaySprawlPieces } from "./CampaignSettlementDisplaySprawlPieces";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";

export namespace CampaignSettlementDisplayBuildingIds {
  export const KEY = new CollectionKey("campaign_settlement_display_building_ids");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _buildingLevelKey: string;
    readonly _sprawlPieceType: string;
    readonly sprawlPieceLevel: number;
    readonly _culture: string;
    readonly _subCulture: string;
    readonly _faction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._buildingLevelKey = values["building_level_key"];
      this._sprawlPieceType = values["sprawl_piece_type"];
      this.sprawlPieceLevel = values["sprawl_piece_level"];
      this._culture = values["culture"];
      this._subCulture = values["sub_culture"];
      this._faction = values["faction"];
    }
    
    get buildingLevelKey(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevelKey);
    }
    
    get sprawlPieceType(): CampaignSettlementDisplaySprawlPieces.Entry | undefined {
      const collection = <CampaignSettlementDisplaySprawlPieces.Entry[]>this.collectionCache.getCollection(CampaignSettlementDisplaySprawlPieces.KEY, CampaignSettlementDisplaySprawlPieces.Entry);
      return collection.find(entry => entry.key === this._sprawlPieceType);
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get subCulture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subCulture);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
  }
}

export default CampaignSettlementDisplayBuildingIds;
