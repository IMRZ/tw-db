
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyRequirementParameters } from "./CampaignDiplomacyRequirementParameters";
import { CampaignDiplomacyPools } from "./CampaignDiplomacyPools";

export namespace CampaignDiplomacyRequirementParameterPools {
  export const KEY = new CollectionKey("campaign_diplomacy_requirement_parameter_pools");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _requirementParameter: string;
    readonly _pool: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._requirementParameter = values["requirement_parameter"];
      this._pool = values["pool"];
    }
    
    get requirementParameter(): CampaignDiplomacyRequirementParameters.Entry | undefined {
      const collection = <CampaignDiplomacyRequirementParameters.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyRequirementParameters.KEY, CampaignDiplomacyRequirementParameters.Entry);
      return collection.find(entry => entry.key === this._requirementParameter);
    }
    
    get pool(): CampaignDiplomacyPools.Entry | undefined {
      const collection = <CampaignDiplomacyPools.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyPools.KEY, CampaignDiplomacyPools.Entry);
      return collection.find(entry => entry.key === this._pool);
    }
  }
}

export default CampaignDiplomacyRequirementParameterPools;
