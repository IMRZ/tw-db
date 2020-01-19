
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyRequirementSets } from "./CampaignDiplomacyRequirementSets";
import { CampaignDiplomacyParameters } from "./CampaignDiplomacyParameters";
import { CampaignDiplomacyTreatyAvailabilityReasons } from "./CampaignDiplomacyTreatyAvailabilityReasons";

export namespace CampaignDiplomacyRequirementParameters {
  export const KEY = new CollectionKey("campaign_diplomacy_requirement_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _requirementSet: string;
    readonly _parameter: string;
    readonly parameterIndex: number;
    readonly _reason: string;
    readonly expireOnDeath: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._requirementSet = values["requirement_set"];
      this._parameter = values["parameter"];
      this.parameterIndex = values["parameter_index"];
      this._reason = values["reason"];
      this.expireOnDeath = !!values["expire_on_death"];
    }
    
    get requirementSet(): CampaignDiplomacyRequirementSets.Entry | undefined {
      const collection = <CampaignDiplomacyRequirementSets.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyRequirementSets.KEY, CampaignDiplomacyRequirementSets.Entry);
      return collection.find(entry => entry.key === this._requirementSet);
    }
    
    get parameter(): CampaignDiplomacyParameters.Entry | undefined {
      const collection = <CampaignDiplomacyParameters.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyParameters.KEY, CampaignDiplomacyParameters.Entry);
      return collection.find(entry => entry.key === this._parameter);
    }
    
    get reason(): CampaignDiplomacyTreatyAvailabilityReasons.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyAvailabilityReasons.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyAvailabilityReasons.KEY, CampaignDiplomacyTreatyAvailabilityReasons.Entry);
      return collection.find(entry => entry.key === this._reason);
    }
  }
}

export default CampaignDiplomacyRequirementParameters;
