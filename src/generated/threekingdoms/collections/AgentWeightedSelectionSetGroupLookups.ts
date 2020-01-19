
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { AgentWeightedSelectionSets } from "./AgentWeightedSelectionSets";

export namespace AgentWeightedSelectionSetGroupLookups {
  export const KEY = new CollectionKey("agent_weighted_selection_set_group_lookups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _selectionSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._selectionSet = values["selection_set"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get selectionSet(): AgentWeightedSelectionSets.Entry | undefined {
      const collection = <AgentWeightedSelectionSets.Entry[]>this.collectionCache.getCollection(AgentWeightedSelectionSets.KEY, AgentWeightedSelectionSets.Entry);
      return collection.find(entry => entry.key === this._selectionSet);
    }
  }
}

export default AgentWeightedSelectionSetGroupLookups;
