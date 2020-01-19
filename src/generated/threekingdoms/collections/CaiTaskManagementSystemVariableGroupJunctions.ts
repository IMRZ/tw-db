
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiTaskManagementSystemVariableGroups } from "./CaiTaskManagementSystemVariableGroups";
import { CaiTaskManagementSystemVariables } from "./CaiTaskManagementSystemVariables";

export namespace CaiTaskManagementSystemVariableGroupJunctions {
  export const KEY = new CollectionKey("cai_task_management_system_variable_group_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _groupKey: string;
    readonly _variableKey: string;
    readonly value: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._groupKey = values["group_key"];
      this._variableKey = values["variable_key"];
      this.value = values["value"];
    }
    
    get groupKey(): CaiTaskManagementSystemVariableGroups.Entry | undefined {
      const collection = <CaiTaskManagementSystemVariableGroups.Entry[]>this.collectionCache.getCollection(CaiTaskManagementSystemVariableGroups.KEY, CaiTaskManagementSystemVariableGroups.Entry);
      return collection.find(entry => entry.key === this._groupKey);
    }
    
    get variableKey(): CaiTaskManagementSystemVariables.Entry | undefined {
      const collection = <CaiTaskManagementSystemVariables.Entry[]>this.collectionCache.getCollection(CaiTaskManagementSystemVariables.KEY, CaiTaskManagementSystemVariables.Entry);
      return collection.find(entry => entry.key === this._variableKey);
    }
  }
}

export default CaiTaskManagementSystemVariableGroupJunctions;
