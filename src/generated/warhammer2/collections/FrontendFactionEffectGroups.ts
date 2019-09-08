
import { CollectionCache, CollectionKey } from "../../../common";
import { FrontendFactionLeaders } from "./FrontendFactionLeaders";
import { Campaigns } from "./Campaigns";

export namespace FrontendFactionEffectGroups {
  export const KEY = new CollectionKey("frontend_faction_effect_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly groupKey: string;
    readonly _factionLeader: string;
    readonly _campaign: string;
    readonly uiSection: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.groupKey = values["group_key"];
      this._factionLeader = values["faction_leader"];
      this._campaign = values["campaign"];
      this.uiSection = values["ui_section"];
    }
    
    get factionLeader(): FrontendFactionLeaders.Entry | undefined {
      const collection = <FrontendFactionLeaders.Entry[]>this.collectionCache.getCollection(FrontendFactionLeaders.KEY, FrontendFactionLeaders.Entry);
      return collection.find(entry => entry.key === this._factionLeader);
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
  }
}

export default FrontendFactionEffectGroups;
