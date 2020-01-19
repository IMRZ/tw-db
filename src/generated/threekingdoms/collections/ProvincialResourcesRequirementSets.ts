
import { CollectionCache, CollectionKey } from "../../../common";
import { ProvincialResourcesRequirementSetOperators } from "./ProvincialResourcesRequirementSetOperators";

export namespace ProvincialResourcesRequirementSets {
  export const KEY = new CollectionKey("provincial_resources_requirement_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly setId: string;
    readonly _operatorKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.setId = values["set_id"];
      this._operatorKey = values["operator_key"];
    }
    
    get operatorKey(): ProvincialResourcesRequirementSetOperators.Entry | undefined {
      const collection = <ProvincialResourcesRequirementSetOperators.Entry[]>this.collectionCache.getCollection(ProvincialResourcesRequirementSetOperators.KEY, ProvincialResourcesRequirementSetOperators.Entry);
      return collection.find(entry => entry.operatorKey === this._operatorKey);
    }
  }
}

export default ProvincialResourcesRequirementSets;
