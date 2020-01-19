
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CampaignDiplomacyExistingComponents } from "./CampaignDiplomacyExistingComponents";

export namespace CampaignDiplomacyTreatyComponentProposesTreatyComponents {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_component_proposes_treaty_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _originalComponent: string;
    readonly _proposesAdditionalComponent: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._originalComponent = values["original_component"];
      this._proposesAdditionalComponent = values["proposes_additional_component"];
    }
    
    get originalComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._originalComponent);
    }
    
    get proposesAdditionalComponent(): CampaignDiplomacyExistingComponents.Entry | undefined {
      const collection = <CampaignDiplomacyExistingComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyExistingComponents.KEY, CampaignDiplomacyExistingComponents.Entry);
      return collection.find(entry => entry.key === this._proposesAdditionalComponent);
    }
  }
}

export default CampaignDiplomacyTreatyComponentProposesTreatyComponents;
