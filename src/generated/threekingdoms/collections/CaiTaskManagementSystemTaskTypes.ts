
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiTaskManagementSystemTaskTypes {
  export const KEY = new CollectionKey("cai_task_management_system_task_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
    }
    
  }
}

export default CaiTaskManagementSystemTaskTypes;
