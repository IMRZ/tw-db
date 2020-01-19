
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponentMaximumProposableGroups } from "./CampaignDiplomacyTreatyComponentMaximumProposableGroups";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";

export namespace CampaignDiplomacyTreatyComponentsToMaximumProposableGroups {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_components_to_maximum_proposable_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly _component: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this._component = values["component"];
    }
    
    get group(): CampaignDiplomacyTreatyComponentMaximumProposableGroups.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponentMaximumProposableGroups.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponentMaximumProposableGroups.KEY, CampaignDiplomacyTreatyComponentMaximumProposableGroups.Entry);
      return collection.find(entry => entry.group === this._group);
    }
    
    get component(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._component);
    }
  }
}

export default CampaignDiplomacyTreatyComponentsToMaximumProposableGroups;
