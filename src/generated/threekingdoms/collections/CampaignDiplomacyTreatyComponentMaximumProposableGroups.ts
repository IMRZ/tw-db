
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyAvailabilityReasons } from "./CampaignDiplomacyTreatyAvailabilityReasons";

export namespace CampaignDiplomacyTreatyComponentMaximumProposableGroups {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_component_maximum_proposable_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly group: string;
    readonly maximumNumberOfComponentsProposable: number;
    readonly _reasonIfReachedMaximumProposable: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.group = values["group"];
      this.maximumNumberOfComponentsProposable = values["maximum_number_of_components_proposable"];
      this._reasonIfReachedMaximumProposable = values["reason_if_reached_maximum_proposable"];
    }
    
    get reasonIfReachedMaximumProposable(): CampaignDiplomacyTreatyAvailabilityReasons.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyAvailabilityReasons.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyAvailabilityReasons.KEY, CampaignDiplomacyTreatyAvailabilityReasons.Entry);
      return collection.find(entry => entry.key === this._reasonIfReachedMaximumProposable);
    }
  }
}

export default CampaignDiplomacyTreatyComponentMaximumProposableGroups;
