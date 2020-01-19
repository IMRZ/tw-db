
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiTaskManagementSystemVariableGroups } from "./CaiTaskManagementSystemVariableGroups";

export namespace CaiPersonalitiesTaskManagementSystemVariableProfiles {
  export const KEY = new CollectionKey("cai_personalities_task_management_system_variable_profiles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _defaultVariableGroupKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._defaultVariableGroupKey = values["default_variable_group_key"];
    }
    
    get defaultVariableGroupKey(): CaiTaskManagementSystemVariableGroups.Entry | undefined {
      const collection = <CaiTaskManagementSystemVariableGroups.Entry[]>this.collectionCache.getCollection(CaiTaskManagementSystemVariableGroups.KEY, CaiTaskManagementSystemVariableGroups.Entry);
      return collection.find(entry => entry.key === this._defaultVariableGroupKey);
    }
  }
}

export default CaiPersonalitiesTaskManagementSystemVariableProfiles;
