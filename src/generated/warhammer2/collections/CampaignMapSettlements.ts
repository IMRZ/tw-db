
import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementClimateTypes } from "./SettlementClimateTypes";

export namespace CampaignMapSettlements {
  export const KEY = new CollectionKey("campaign_map_settlements");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly settlementId: string;
    readonly _climateType: string;
    readonly citybarHeightOffset: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.settlementId = values["settlement_id"];
      this._climateType = values["climate_type"];
      this.citybarHeightOffset = values["citybar_height_offset"];
    }
    
    get climateType(): SettlementClimateTypes.Entry | undefined {
      const collection = <SettlementClimateTypes.Entry[]>this.collectionCache.getCollection(SettlementClimateTypes.KEY, SettlementClimateTypes.Entry);
      return collection.find(entry => entry.type === this._climateType);
    }
  }
}

export default CampaignMapSettlements;
