
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
import { CampaignEffectGroups } from "./CampaignEffectGroups";

export namespace CampaignEffectScopesToCampaignEffectGroupsJunctions {
  export const KEY = new CollectionKey("campaign_effect_scopes_to_campaign_effect_groups_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly _groupId: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this._groupId = values["group_id"];
    }
    
    get key(): CampaignEffectScopes.Entry | undefined {
      const collection = <CampaignEffectScopes.Entry[]>this.collectionCache.getCollection(CampaignEffectScopes.KEY, CampaignEffectScopes.Entry);
      return collection.find(entry => entry.key === this._key);
    }
    
    get groupId(): CampaignEffectGroups.Entry | undefined {
      const collection = <CampaignEffectGroups.Entry[]>this.collectionCache.getCollection(CampaignEffectGroups.KEY, CampaignEffectGroups.Entry);
      return collection.find(entry => entry.key === this._groupId);
    }
  }
}

export default CampaignEffectScopesToCampaignEffectGroupsJunctions;
