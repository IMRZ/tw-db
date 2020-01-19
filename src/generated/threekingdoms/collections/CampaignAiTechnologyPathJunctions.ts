
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAiTechnologyPaths } from "./CampaignAiTechnologyPaths";
import { Technologies } from "./Technologies";

export namespace CampaignAiTechnologyPathJunctions {
  export const KEY = new CollectionKey("campaign_ai_technology_path_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _pathKey: string;
    readonly _technologyKey: string;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._pathKey = values["path_key"];
      this._technologyKey = values["technology_key"];
      this.priority = values["priority"];
    }
    
    get pathKey(): CampaignAiTechnologyPaths.Entry | undefined {
      const collection = <CampaignAiTechnologyPaths.Entry[]>this.collectionCache.getCollection(CampaignAiTechnologyPaths.KEY, CampaignAiTechnologyPaths.Entry);
      return collection.find(entry => entry.key === this._pathKey);
    }
    
    get technologyKey(): Technologies.Entry | undefined {
      const collection = <Technologies.Entry[]>this.collectionCache.getCollection(Technologies.KEY, Technologies.Entry);
      return collection.find(entry => entry.key === this._technologyKey);
    }
  }
}

export default CampaignAiTechnologyPathJunctions;
