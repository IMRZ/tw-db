
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TExcMissingConditions {
  export const KEY = new CollectionKey("TExc_missing_conditions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly exportedScript: string;
    readonly condition: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["ID"];
      this.exportedScript = values["exported_script"];
      this.condition = values["condition"];
    }
    
  }
}

export default TExcMissingConditions;
