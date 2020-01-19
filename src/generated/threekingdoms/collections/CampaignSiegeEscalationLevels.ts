
import { CollectionCache, CollectionKey } from "../../../common";
import { BmdExportTypes } from "./BmdExportTypes";

export namespace CampaignSiegeEscalationLevels {
  export const KEY = new CollectionKey("campaign_siege_escalation_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly level: number;
    readonly wallBreachesCount: number;
    readonly totalWallHealthLessThan: number;
    readonly wallPiecesHealth: number;
    readonly countWallPiecesHealthLessThan: number;
    readonly _bmdExportType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.level = values["level"];
      this.wallBreachesCount = values["wall_breaches_count"];
      this.totalWallHealthLessThan = values["total_wall_health_less_than"];
      this.wallPiecesHealth = values["wall_pieces_health"];
      this.countWallPiecesHealthLessThan = values["count_wall_pieces_health_less_than"];
      this._bmdExportType = values["bmd_export_type"];
    }
    
    get bmdExportType(): BmdExportTypes.Entry | undefined {
      const collection = <BmdExportTypes.Entry[]>this.collectionCache.getCollection(BmdExportTypes.KEY, BmdExportTypes.Entry);
      return collection.find(entry => entry.name === this._bmdExportType);
    }
  }
}

export default CampaignSiegeEscalationLevels;
