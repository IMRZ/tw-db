
import { CollectionCache, CollectionKey } from "../../../common";
import { FactionResourcesRequirementSets } from "./FactionResourcesRequirementSets";
import { FactionResourceIds } from "./FactionResourceIds";

export namespace FactionResourcesRequirementSetToResourcesJunctions {
  export const KEY = new CollectionKey("faction_resources_requirement_set_to_resources_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _setId: string;
    readonly _factionResourceId: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._setId = values["set_id"];
      this._factionResourceId = values["faction_resource_id"];
    }
    
    get setId(): FactionResourcesRequirementSets.Entry | undefined {
      const collection = <FactionResourcesRequirementSets.Entry[]>this.collectionCache.getCollection(FactionResourcesRequirementSets.KEY, FactionResourcesRequirementSets.Entry);
      return collection.find(entry => entry.setId === this._setId);
    }
    
    get factionResourceId(): FactionResourceIds.Entry | undefined {
      const collection = <FactionResourceIds.Entry[]>this.collectionCache.getCollection(FactionResourceIds.KEY, FactionResourceIds.Entry);
      return collection.find(entry => entry.factionResourceFlag === this._factionResourceId);
    }
  }
}

export default FactionResourcesRequirementSetToResourcesJunctions;
