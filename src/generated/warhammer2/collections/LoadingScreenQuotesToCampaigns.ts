
import { CollectionCache, CollectionKey } from "../../../common";
import { LoadingScreenQuotes } from "./LoadingScreenQuotes";
import { CampaignMapPlayableAreas } from "./CampaignMapPlayableAreas";

export namespace LoadingScreenQuotesToCampaigns {
  export const KEY = new CollectionKey("loading_screen_quotes_to_campaigns");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _loadingQuote: string;
    readonly _campaign: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._loadingQuote = values["loading_quote"];
      this._campaign = values["campaign"];
    }
    
    get loadingQuote(): LoadingScreenQuotes.Entry | undefined {
      const collection = <LoadingScreenQuotes.Entry[]>this.collectionCache.getCollection(LoadingScreenQuotes.KEY, LoadingScreenQuotes.Entry);
      return collection.find(entry => entry.key === this._loadingQuote);
    }
    
    get campaign(): CampaignMapPlayableAreas.Entry | undefined {
      const collection = <CampaignMapPlayableAreas.Entry[]>this.collectionCache.getCollection(CampaignMapPlayableAreas.KEY, CampaignMapPlayableAreas.Entry);
      return collection.find(entry => entry._mapname === this._campaign);
    }
  }
}

export default LoadingScreenQuotesToCampaigns;
