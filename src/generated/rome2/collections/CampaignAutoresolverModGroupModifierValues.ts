
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAutoresolverModGroups } from "./CampaignAutoresolverModGroups";
import { CampaignAutoresolverModifiers } from "./CampaignAutoresolverModifiers";

export namespace CampaignAutoresolverModGroupModifierValues {
  export const KEY = new CollectionKey("campaign_autoresolver_mod_group_modifier_values");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _groupId: string;
    readonly _modificationId: string;
    readonly value: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._groupId = values["group_id"];
      this._modificationId = values["modification_id"];
      this.value = values["value"];
    }
    
    get groupId(): CampaignAutoresolverModGroups.Entry | undefined {
      const collection = <CampaignAutoresolverModGroups.Entry[]>this.collectionCache.getCollection(CampaignAutoresolverModGroups.KEY, CampaignAutoresolverModGroups.Entry);
      return collection.find(entry => entry.id === this._groupId);
    }
    
    get modificationId(): CampaignAutoresolverModifiers.Entry | undefined {
      const collection = <CampaignAutoresolverModifiers.Entry[]>this.collectionCache.getCollection(CampaignAutoresolverModifiers.KEY, CampaignAutoresolverModifiers.Entry);
      return collection.find(entry => entry.id === this._modificationId);
    }
  }
}

export default CampaignAutoresolverModGroupModifierValues;
