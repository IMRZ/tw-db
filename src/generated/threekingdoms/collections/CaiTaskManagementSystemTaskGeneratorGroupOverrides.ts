
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiTaskManagementSystemTaskGeneratorGroups } from "./CaiTaskManagementSystemTaskGeneratorGroups";

export namespace CaiTaskManagementSystemTaskGeneratorGroupOverrides {
  export const KEY = new CollectionKey("cai_task_management_system_task_generator_group_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _taskGeneratorGroup: string;
    readonly _parentTaskGeneratorGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._taskGeneratorGroup = values["task_generator_group"];
      this._parentTaskGeneratorGroup = values["parent_task_generator_group"];
    }
    
    get taskGeneratorGroup(): CaiTaskManagementSystemTaskGeneratorGroups.Entry | undefined {
      const collection = <CaiTaskManagementSystemTaskGeneratorGroups.Entry[]>this.collectionCache.getCollection(CaiTaskManagementSystemTaskGeneratorGroups.KEY, CaiTaskManagementSystemTaskGeneratorGroups.Entry);
      return collection.find(entry => entry.key === this._taskGeneratorGroup);
    }
    
    get parentTaskGeneratorGroup(): CaiTaskManagementSystemTaskGeneratorGroups.Entry | undefined {
      const collection = <CaiTaskManagementSystemTaskGeneratorGroups.Entry[]>this.collectionCache.getCollection(CaiTaskManagementSystemTaskGeneratorGroups.KEY, CaiTaskManagementSystemTaskGeneratorGroups.Entry);
      return collection.find(entry => entry.key === this._parentTaskGeneratorGroup);
    }
  }
}

export default CaiTaskManagementSystemTaskGeneratorGroupOverrides;
