
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiTaskManagementSystemVariableGroups {
  export const KEY = new CollectionKey("cai_task_management_system_variable_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CaiTaskManagementSystemVariableGroups;
