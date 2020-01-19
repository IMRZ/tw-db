
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiTaskManagementSystemTaskGeneratorVariables {
  export const KEY = new CollectionKey("cai_task_management_system_task_generator_variables");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly defaultValue: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.defaultValue = values["default_value"];
    }
    
  }
}

export default CaiTaskManagementSystemTaskGeneratorVariables;
