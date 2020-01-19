
import { CollectionCache, CollectionKey } from "../../../common";
import { ProvincialResourcesRequirementSets } from "./ProvincialResourcesRequirementSets";
import { ProvincialResourceIds } from "./ProvincialResourceIds";

export namespace ProvincialResourcesRequirementSetToResourcesJunctions {
  export const KEY = new CollectionKey("provincial_resources_requirement_set_to_resources_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _setId: string;
    readonly _provincialResourceId: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._setId = values["set_id"];
      this._provincialResourceId = values["provincial_resource_id"];
    }
    
    get setId(): ProvincialResourcesRequirementSets.Entry | undefined {
      const collection = <ProvincialResourcesRequirementSets.Entry[]>this.collectionCache.getCollection(ProvincialResourcesRequirementSets.KEY, ProvincialResourcesRequirementSets.Entry);
      return collection.find(entry => entry.setId === this._setId);
    }
    
    get provincialResourceId(): ProvincialResourceIds.Entry | undefined {
      const collection = <ProvincialResourceIds.Entry[]>this.collectionCache.getCollection(ProvincialResourceIds.KEY, ProvincialResourceIds.Entry);
      return collection.find(entry => entry.provincialResourceFlag === this._provincialResourceId);
    }
  }
}

export default ProvincialResourcesRequirementSetToResourcesJunctions;
