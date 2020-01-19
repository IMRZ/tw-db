
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiTaskManagementSystemTaskGeneratorVariableGroups } from "./CaiTaskManagementSystemTaskGeneratorVariableGroups";

export namespace CaiTaskManagementSystemTaskGeneratorVariableGroupOverrides {
  export const KEY = new CollectionKey("cai_task_management_system_task_generator_variable_group_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly _parentKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this._parentKey = values["parent_key"];
    }
    
    get key(): CaiTaskManagementSystemTaskGeneratorVariableGroups.Entry | undefined {
      const collection = <CaiTaskManagementSystemTaskGeneratorVariableGroups.Entry[]>this.collectionCache.getCollection(CaiTaskManagementSystemTaskGeneratorVariableGroups.KEY, CaiTaskManagementSystemTaskGeneratorVariableGroups.Entry);
      return collection.find(entry => entry.key === this._key);
    }
    
    get parentKey(): CaiTaskManagementSystemTaskGeneratorVariableGroups.Entry | undefined {
      const collection = <CaiTaskManagementSystemTaskGeneratorVariableGroups.Entry[]>this.collectionCache.getCollection(CaiTaskManagementSystemTaskGeneratorVariableGroups.KEY, CaiTaskManagementSystemTaskGeneratorVariableGroups.Entry);
      return collection.find(entry => entry.key === this._parentKey);
    }
  }
}

export default CaiTaskManagementSystemTaskGeneratorVariableGroupOverrides;
