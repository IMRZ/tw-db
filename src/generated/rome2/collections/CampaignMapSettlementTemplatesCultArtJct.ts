
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapSettlementTemplates } from "./CampaignMapSettlementTemplates";
import { Cultures } from "./Cultures";

export namespace CampaignMapSettlementTemplatesCultArtJct {
  export const KEY = new CollectionKey("campaign_map_settlement_templates_cult_art_jct");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _settlementTemplate: string;
    readonly _culture: string;
    readonly artpiece: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._settlementTemplate = values["settlement_template"];
      this._culture = values["culture"];
      this.artpiece = values["artpiece"];
    }
    
    get settlementTemplate(): CampaignMapSettlementTemplates.Entry | undefined {
      const collection = <CampaignMapSettlementTemplates.Entry[]>this.collectionCache.getCollection(CampaignMapSettlementTemplates.KEY, CampaignMapSettlementTemplates.Entry);
      return collection.find(entry => entry.templateName === this._settlementTemplate);
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
  }
}

export default CampaignMapSettlementTemplatesCultArtJct;
