
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiTaskManagementSystemVariables {
  export const KEY = new CollectionKey("cai_task_management_system_variables");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly defaultValue: number;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.defaultValue = values["default_value"];
      this.description = values["description"];
    }
    
  }
}

export default CaiTaskManagementSystemVariables;
