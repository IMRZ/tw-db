
import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";

export namespace PublicOrderFactors {
  export const KEY = new CollectionKey("public_order_factors");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly factor: string;
    readonly positivePipPath: string;
    readonly positiveTooltip: string;
    readonly negativePipPath: string;
    readonly negativeTooltip: string;
    readonly _optionalCampaignKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.factor = values["factor"];
      this.positivePipPath = values["positive_pip_path"];
      this.positiveTooltip = values["positive_tooltip"];
      this.negativePipPath = values["negative_pip_path"];
      this.negativeTooltip = values["negative_tooltip"];
      this._optionalCampaignKey = values["optional_campaign_key"];
    }
    
    get optionalCampaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._optionalCampaignKey);
    }
  }
}

export default PublicOrderFactors;
