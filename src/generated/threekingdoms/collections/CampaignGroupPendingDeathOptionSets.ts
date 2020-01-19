
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CharacterPendingDeathOptionSets } from "./CharacterPendingDeathOptionSets";

export namespace CampaignGroupPendingDeathOptionSets {
  export const KEY = new CollectionKey("campaign_group_pending_death_option_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _optionSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._optionSet = values["option_set"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get optionSet(): CharacterPendingDeathOptionSets.Entry | undefined {
      const collection = <CharacterPendingDeathOptionSets.Entry[]>this.collectionCache.getCollection(CharacterPendingDeathOptionSets.KEY, CharacterPendingDeathOptionSets.Entry);
      return collection.find(entry => entry.key === this._optionSet);
    }
  }
}

export default CampaignGroupPendingDeathOptionSets;
