
import { CollectionCache, CollectionKey } from "../../../common";
import { FactionResourcesRequirementSetOperators } from "./FactionResourcesRequirementSetOperators";

export namespace FactionResourcesRequirementSets {
  export const KEY = new CollectionKey("faction_resources_requirement_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly setId: string;
    readonly _operatorKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.setId = values["set_id"];
      this._operatorKey = values["operator_key"];
    }
    
    get operatorKey(): FactionResourcesRequirementSetOperators.Entry | undefined {
      const collection = <FactionResourcesRequirementSetOperators.Entry[]>this.collectionCache.getCollection(FactionResourcesRequirementSetOperators.KEY, FactionResourcesRequirementSetOperators.Entry);
      return collection.find(entry => entry.operatorKey === this._operatorKey);
    }
  }
}

export default FactionResourcesRequirementSets;
