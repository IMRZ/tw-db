
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiTaskManagementSystemVariableGroups } from "./CaiTaskManagementSystemVariableGroups";

export namespace CaiTaskManagementSystemVariableGroupOverrides {
  export const KEY = new CollectionKey("cai_task_management_system_variable_group_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _groupKey: string;
    readonly _parentGroupKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._groupKey = values["group_key"];
      this._parentGroupKey = values["parent_group_key"];
    }
    
    get groupKey(): CaiTaskManagementSystemVariableGroups.Entry | undefined {
      const collection = <CaiTaskManagementSystemVariableGroups.Entry[]>this.collectionCache.getCollection(CaiTaskManagementSystemVariableGroups.KEY, CaiTaskManagementSystemVariableGroups.Entry);
      return collection.find(entry => entry.key === this._groupKey);
    }
    
    get parentGroupKey(): CaiTaskManagementSystemVariableGroups.Entry | undefined {
      const collection = <CaiTaskManagementSystemVariableGroups.Entry[]>this.collectionCache.getCollection(CaiTaskManagementSystemVariableGroups.KEY, CaiTaskManagementSystemVariableGroups.Entry);
      return collection.find(entry => entry.key === this._parentGroupKey);
    }
  }
}

export default CaiTaskManagementSystemVariableGroupOverrides;
