
import { CollectionCache, CollectionKey } from "../../../common";
import { FrontendFactions } from "./FrontendFactions";
import { FrontendFactionLeaders } from "./FrontendFactionLeaders";
import { Campaigns } from "./Campaigns";

export namespace FrontendFactionToFrontendFactionLeaders {
  export const KEY = new CollectionKey("frontend_faction_to_frontend_faction_leaders");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _frontendFaction: string;
    readonly _frontendFactionLeader: string;
    readonly _campaignKey: string;
    readonly isDefault: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._frontendFaction = values["frontend_faction"];
      this._frontendFactionLeader = values["frontend_faction_leader"];
      this._campaignKey = values["campaign_key"];
      this.isDefault = !!values["is_default"];
    }
    
    get frontendFaction(): FrontendFactions.Entry | undefined {
      const collection = <FrontendFactions.Entry[]>this.collectionCache.getCollection(FrontendFactions.KEY, FrontendFactions.Entry);
      return collection.find(entry => entry._faction === this._frontendFaction);
    }
    
    get frontendFactionLeader(): FrontendFactionLeaders.Entry | undefined {
      const collection = <FrontendFactionLeaders.Entry[]>this.collectionCache.getCollection(FrontendFactionLeaders.KEY, FrontendFactionLeaders.Entry);
      return collection.find(entry => entry.key === this._frontendFactionLeader);
    }
    
    get campaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaignKey);
    }
  }
}

export default FrontendFactionToFrontendFactionLeaders;
