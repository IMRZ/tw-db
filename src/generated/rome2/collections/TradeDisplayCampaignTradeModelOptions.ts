
import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
import { TradeDisplayTradeModels } from "./TradeDisplayTradeModels";

export namespace TradeDisplayCampaignTradeModelOptions {
  export const KEY = new CollectionKey("trade_display_campaign_trade_model_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly _campaign: string;
    readonly _model: string;
    readonly priority: number;
    readonly relativeFrequency: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._campaign = values["campaign"];
      this._model = values["model"];
      this.priority = values["priority"];
      this.relativeFrequency = values["relative_frequency"];
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
    
    get model(): TradeDisplayTradeModels.Entry | undefined {
      const collection = <TradeDisplayTradeModels.Entry[]>this.collectionCache.getCollection(TradeDisplayTradeModels.KEY, TradeDisplayTradeModels.Entry);
      return collection.find(entry => entry.key === this._model);
    }
  }
}

export default TradeDisplayCampaignTradeModelOptions;
