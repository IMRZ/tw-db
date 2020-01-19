
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignRetinueChains } from "./CampaignRetinueChains";
import { Retinues } from "./Retinues";

export namespace CampaignRetinueChainLevels {
  export const KEY = new CollectionKey("campaign_retinue_chain_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _chain: string;
    readonly level: number;
    readonly _retinue: string;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._chain = values["chain"];
      this.level = values["level"];
      this._retinue = values["retinue"];
      this.priority = values["priority"];
    }
    
    get chain(): CampaignRetinueChains.Entry | undefined {
      const collection = <CampaignRetinueChains.Entry[]>this.collectionCache.getCollection(CampaignRetinueChains.KEY, CampaignRetinueChains.Entry);
      return collection.find(entry => entry.key === this._chain);
    }
    
    get retinue(): Retinues.Entry | undefined {
      const collection = <Retinues.Entry[]>this.collectionCache.getCollection(Retinues.KEY, Retinues.Entry);
      return collection.find(entry => entry.key === this._retinue);
    }
  }
}

export default CampaignRetinueChainLevels;
