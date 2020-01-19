
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyRequirementSets } from "./CampaignDiplomacyRequirementSets";

export namespace CampaignDiplomacyNegotiationAutomaticResponses {
  export const KEY = new CollectionKey("campaign_diplomacy_negotiation_automatic_responses");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _requirementSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._requirementSet = values["requirement_set"];
    }
    
    get requirementSet(): CampaignDiplomacyRequirementSets.Entry | undefined {
      const collection = <CampaignDiplomacyRequirementSets.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyRequirementSets.KEY, CampaignDiplomacyRequirementSets.Entry);
      return collection.find(entry => entry.key === this._requirementSet);
    }
  }
}

export default CampaignDiplomacyNegotiationAutomaticResponses;
