
import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
import { CampaignMapSettlementTemplates } from "./CampaignMapSettlementTemplates";
import { Slots } from "./Slots";

export namespace CampaignMapSettlements {
  export const KEY = new CollectionKey("campaign_map_settlements");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly settlementId: string;
    readonly _region: string;
    readonly defaultOnscreenName: string;
    readonly _templateName: string;
    readonly slotCount: number;
    readonly _slotType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.settlementId = values["settlement_id"];
      this._region = values["region"];
      this.defaultOnscreenName = values["default_onscreen_name"];
      this._templateName = values["template_name"];
      this.slotCount = values["slot_count"];
      this._slotType = values["slot_type"];
    }
    
    get region(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._region);
    }
    
    get templateName(): CampaignMapSettlementTemplates.Entry | undefined {
      const collection = <CampaignMapSettlementTemplates.Entry[]>this.collectionCache.getCollection(CampaignMapSettlementTemplates.KEY, CampaignMapSettlementTemplates.Entry);
      return collection.find(entry => entry.templateName === this._templateName);
    }
    
    get slotType(): Slots.Entry | undefined {
      const collection = <Slots.Entry[]>this.collectionCache.getCollection(Slots.KEY, Slots.Entry);
      return collection.find(entry => entry.slot === this._slotType);
    }
  }
}

export default CampaignMapSettlements;
