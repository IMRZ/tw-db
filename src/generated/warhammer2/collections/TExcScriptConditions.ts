
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TExcScriptConditions {
  export const KEY = new CollectionKey("TExc_script_conditions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly condition: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.condition = values["Condition"];
    }
    
  }
}

export default TExcScriptConditions;
