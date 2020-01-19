
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiTaskManagementSystemTaskGeneratorVariableGroups } from "./CaiTaskManagementSystemTaskGeneratorVariableGroups";
import { CaiTaskManagementSystemTaskGeneratorVariables } from "./CaiTaskManagementSystemTaskGeneratorVariables";

export namespace CaiTaskManagementSystemTaskGeneratorVariableGroupJunctions {
  export const KEY = new CollectionKey("cai_task_management_system_task_generator_variable_group_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _variableGroupKey: string;
    readonly _variableKey: string;
    readonly value: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._variableGroupKey = values["variable_group_key"];
      this._variableKey = values["variable_key"];
      this.value = values["value"];
    }
    
    get variableGroupKey(): CaiTaskManagementSystemTaskGeneratorVariableGroups.Entry | undefined {
      const collection = <CaiTaskManagementSystemTaskGeneratorVariableGroups.Entry[]>this.collectionCache.getCollection(CaiTaskManagementSystemTaskGeneratorVariableGroups.KEY, CaiTaskManagementSystemTaskGeneratorVariableGroups.Entry);
      return collection.find(entry => entry.key === this._variableGroupKey);
    }
    
    get variableKey(): CaiTaskManagementSystemTaskGeneratorVariables.Entry | undefined {
      const collection = <CaiTaskManagementSystemTaskGeneratorVariables.Entry[]>this.collectionCache.getCollection(CaiTaskManagementSystemTaskGeneratorVariables.KEY, CaiTaskManagementSystemTaskGeneratorVariables.Entry);
      return collection.find(entry => entry.key === this._variableKey);
    }
  }
}

export default CaiTaskManagementSystemTaskGeneratorVariableGroupJunctions;
