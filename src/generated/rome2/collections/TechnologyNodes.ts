
import { CollectionCache, CollectionKey } from "../../../common";
import { TechnologyNodeSets } from "./TechnologyNodeSets";
import { Technologies } from "./Technologies";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";

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

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._technologyNodeSet = values["technology_node_set"];
      this._technologyKey = values["technology_key"];
      this._factionKey = values["faction_key"];
      this._campaignKey = values["campaign_key"];
      this.tier = values["tier"];
      this.indent = values["indent"];
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
  }
}

export default TechnologyNodes;
