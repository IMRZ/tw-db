
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CampaignDiplomacyExistingComponents } from "./CampaignDiplomacyExistingComponents";
import { CampaignDiplomacySelectionFilters } from "./CampaignDiplomacySelectionFilters";
import { CampaignDiplomacyTreatyComponentRemovalTypes } from "./CampaignDiplomacyTreatyComponentRemovalTypes";

export namespace CampaignDiplomacyTreatyComponentRemovalRequiredTreaties {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_component_removal_required_treaties");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _component: string;
    readonly _requirement: string;
    readonly generationPriority: number;
    readonly applicationPriority: number;
    readonly _proposerSelectionFilter: string;
    readonly _recipientSelectionFilter: string;
    readonly _removalType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._component = values["component"];
      this._requirement = values["requirement"];
      this.generationPriority = values["generation_priority"];
      this.applicationPriority = values["application_priority"];
      this._proposerSelectionFilter = values["proposer_selection_filter"];
      this._recipientSelectionFilter = values["recipient_selection_filter"];
      this._removalType = values["removal_type"];
    }
    
    get component(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._component);
    }
    
    get requirement(): CampaignDiplomacyExistingComponents.Entry | undefined {
      const collection = <CampaignDiplomacyExistingComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyExistingComponents.KEY, CampaignDiplomacyExistingComponents.Entry);
      return collection.find(entry => entry.key === this._requirement);
    }
    
    get proposerSelectionFilter(): CampaignDiplomacySelectionFilters.Entry | undefined {
      const collection = <CampaignDiplomacySelectionFilters.Entry[]>this.collectionCache.getCollection(CampaignDiplomacySelectionFilters.KEY, CampaignDiplomacySelectionFilters.Entry);
      return collection.find(entry => entry.selection === this._proposerSelectionFilter);
    }
    
    get recipientSelectionFilter(): CampaignDiplomacySelectionFilters.Entry | undefined {
      const collection = <CampaignDiplomacySelectionFilters.Entry[]>this.collectionCache.getCollection(CampaignDiplomacySelectionFilters.KEY, CampaignDiplomacySelectionFilters.Entry);
      return collection.find(entry => entry.selection === this._recipientSelectionFilter);
    }
    
    get removalType(): CampaignDiplomacyTreatyComponentRemovalTypes.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponentRemovalTypes.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponentRemovalTypes.KEY, CampaignDiplomacyTreatyComponentRemovalTypes.Entry);
      return collection.find(entry => entry.type === this._removalType);
    }
  }
}

export default CampaignDiplomacyTreatyComponentRemovalRequiredTreaties;
