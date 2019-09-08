
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";

export namespace CampaignCompanionArmyDetails {
  export const KEY = new CollectionKey("campaign_companion_army_details");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly armyType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this.armyType = values["army_type"];
    }
    
    get group(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._group);
    }
  }
}

export default CampaignCompanionArmyDetails;
