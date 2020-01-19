
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyGroups } from "./CampaignDiplomacyGroups";
import { CampaignDiplomacyExistingComponents } from "./CampaignDiplomacyExistingComponents";
import { CampaignDiplomacyTreatyComponentStates } from "./CampaignDiplomacyTreatyComponentStates";

export namespace CampaignDiplomacyGroupExistingComponents {
  export const KEY = new CollectionKey("campaign_diplomacy_group_existing_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly _existingComponent: string;
    readonly _componentState: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this._existingComponent = values["existing_component"];
      this._componentState = values["component_state"];
    }
    
    get group(): CampaignDiplomacyGroups.Entry | undefined {
      const collection = <CampaignDiplomacyGroups.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyGroups.KEY, CampaignDiplomacyGroups.Entry);
      return collection.find(entry => entry.key === this._group);
    }
    
    get existingComponent(): CampaignDiplomacyExistingComponents.Entry | undefined {
      const collection = <CampaignDiplomacyExistingComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyExistingComponents.KEY, CampaignDiplomacyExistingComponents.Entry);
      return collection.find(entry => entry.key === this._existingComponent);
    }
    
    get componentState(): CampaignDiplomacyTreatyComponentStates.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponentStates.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponentStates.KEY, CampaignDiplomacyTreatyComponentStates.Entry);
      return collection.find(entry => entry.key === this._componentState);
    }
  }
}

export default CampaignDiplomacyGroupExistingComponents;
