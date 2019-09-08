
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignMapSettlementTemplates {
  export const KEY = new CollectionKey("campaign_map_settlement_templates");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly templateName: string;
    readonly slotTotal: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.templateName = values["template_name"];
      this.slotTotal = values["slot_total"];
    }
    
  }
}

export default CampaignMapSettlementTemplates;
