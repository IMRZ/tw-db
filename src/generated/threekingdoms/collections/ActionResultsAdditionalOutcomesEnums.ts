
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ActionResultsAdditionalOutcomesEnums {
  export const KEY = new CollectionKey("action_results_additional_outcomes_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default ActionResultsAdditionalOutcomesEnums;
