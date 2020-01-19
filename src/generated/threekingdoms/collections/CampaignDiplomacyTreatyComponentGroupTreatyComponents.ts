
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponentGroups } from "./CampaignDiplomacyTreatyComponentGroups";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";

export namespace CampaignDiplomacyTreatyComponentGroupTreatyComponents {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_component_group_treaty_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly _component: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this._component = values["component"];
    }
    
    get group(): CampaignDiplomacyTreatyComponentGroups.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponentGroups.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponentGroups.KEY, CampaignDiplomacyTreatyComponentGroups.Entry);
      return collection.find(entry => entry.key === this._group);
    }
    
    get component(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._component);
    }
  }
}

export default CampaignDiplomacyTreatyComponentGroupTreatyComponents;
