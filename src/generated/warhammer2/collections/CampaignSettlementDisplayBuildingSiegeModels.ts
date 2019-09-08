
import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";

export namespace CampaignSettlementDisplayBuildingSiegeModels {
  export const KEY = new CollectionKey("campaign_settlement_display_building_siege_models");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly modelBmd: string;
    readonly blockade: boolean;
    readonly _culture: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.modelBmd = values["model_bmd"];
      this.blockade = !!values["blockade"];
      this._culture = values["culture"];
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
  }
}

export default CampaignSettlementDisplayBuildingSiegeModels;
