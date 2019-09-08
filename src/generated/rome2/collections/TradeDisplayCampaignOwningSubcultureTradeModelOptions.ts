
import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { TradeDisplayTradeModels } from "./TradeDisplayTradeModels";

export namespace TradeDisplayCampaignOwningSubcultureTradeModelOptions {
  export const KEY = new CollectionKey("trade_display_campaign_owning_subculture_trade_model_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly _campaign: string;
    readonly _owningSubculture: string;
    readonly _model: string;
    readonly priority: number;
    readonly relativeFrequency: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._campaign = values["campaign"];
      this._owningSubculture = values["owning_subculture"];
      this._model = values["model"];
      this.priority = values["priority"];
      this.relativeFrequency = values["relative_frequency"];
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
    
    get owningSubculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._owningSubculture);
    }
    
    get model(): TradeDisplayTradeModels.Entry | undefined {
      const collection = <TradeDisplayTradeModels.Entry[]>this.collectionCache.getCollection(TradeDisplayTradeModels.KEY, TradeDisplayTradeModels.Entry);
      return collection.find(entry => entry.key === this._model);
    }
  }
}

export default TradeDisplayCampaignOwningSubcultureTradeModelOptions;
