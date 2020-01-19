
import { CollectionCache, CollectionKey } from "../../../common";


export namespace FactionResourcesRequirementSetOperators {
  export const KEY = new CollectionKey("faction_resources_requirement_set_operators");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly operatorKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.operatorKey = values["operator_key"];
    }
    
  }
}

export default FactionResourcesRequirementSetOperators;
