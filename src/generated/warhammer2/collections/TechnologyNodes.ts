
import { CollectionCache, CollectionKey } from "../../../common";
import { TechnologyNodeSets } from "./TechnologyNodeSets";
import { Technologies } from "./Technologies";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
import { TechnologyUiGroups } from "./TechnologyUiGroups";
import { ResourceCosts } from "./ResourceCosts";

export namespace TechnologyNodes {
  export const KEY = new CollectionKey("technology_nodes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _technologyNodeSet: string;
    readonly _technologyKey: string;
    readonly _factionKey: string;
    readonly _campaignKey: string;
    readonly tier: number;
    readonly indent: number;
    readonly researchPointsRequired: number;
    readonly costPerRound: number;
    readonly _optionalUiGroup: string;
    readonly foodCost: number;
    readonly _resourceCost: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._technologyNodeSet = values["technology_node_set"];
      this._technologyKey = values["technology_key"];
      this._factionKey = values["faction_key"];
      this._campaignKey = values["campaign_key"];
      this.tier = values["tier"];
      this.indent = values["indent"];
      this.researchPointsRequired = values["research_points_required"];
      this.costPerRound = values["cost_per_round"];
      this._optionalUiGroup = values["optional_ui_group"];
      this.foodCost = values["food_cost"];
      this._resourceCost = values["resource_cost"];
    }
    
    get technologyNodeSet(): TechnologyNodeSets.Entry | undefined {
      const collection = <TechnologyNodeSets.Entry[]>this.collectionCache.getCollection(TechnologyNodeSets.KEY, TechnologyNodeSets.Entry);
      return collection.find(entry => entry.key === this._technologyNodeSet);
    }
    
    get technologyKey(): Technologies.Entry | undefined {
      const collection = <Technologies.Entry[]>this.collectionCache.getCollection(Technologies.KEY, Technologies.Entry);
      return collection.find(entry => entry.key === this._technologyKey);
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
    
    get campaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaignKey);
    }
    
    get optionalUiGroup(): TechnologyUiGroups.Entry | undefined {
      const collection = <TechnologyUiGroups.Entry[]>this.collectionCache.getCollection(TechnologyUiGroups.KEY, TechnologyUiGroups.Entry);
      return collection.find(entry => entry.key === this._optionalUiGroup);
    }
    
    get resourceCost(): ResourceCosts.Entry | undefined {
      const collection = <ResourceCosts.Entry[]>this.collectionCache.getCollection(ResourceCosts.KEY, ResourceCosts.Entry);
      return collection.find(entry => entry.id === this._resourceCost);
    }
  }
}

export default TechnologyNodes;
