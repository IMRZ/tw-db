
import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";

export namespace CampaignSettlementDisplayBuildingCultureOverlays {
  export const KEY = new CollectionKey("campaign_settlement_display_building_culture_overlays");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _culture: string;
    readonly bmd: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._culture = values["culture"];
      this.bmd = values["bmd"];
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
  }
}

export default CampaignSettlementDisplayBuildingCultureOverlays;
