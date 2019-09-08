
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiTaskManagementSystemTaskGeneratorGroups } from "./CaiTaskManagementSystemTaskGeneratorGroups";
import { CaiTaskManagementSystemTaskGenerators } from "./CaiTaskManagementSystemTaskGenerators";

export namespace CaiTaskManagementSystemTaskGeneratorGroupsGeneratorsJunctions {
  export const KEY = new CollectionKey("cai_task_management_system_task_generator_groups_generators_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _taskGeneratorGroupKey: string;
    readonly _taskGeneratorKey: string;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._taskGeneratorGroupKey = values["task_generator_group_key"];
      this._taskGeneratorKey = values["task_generator_key"];
      this.priority = values["priority"];
    }
    
    get taskGeneratorGroupKey(): CaiTaskManagementSystemTaskGeneratorGroups.Entry | undefined {
      const collection = <CaiTaskManagementSystemTaskGeneratorGroups.Entry[]>this.collectionCache.getCollection(CaiTaskManagementSystemTaskGeneratorGroups.KEY, CaiTaskManagementSystemTaskGeneratorGroups.Entry);
      return collection.find(entry => entry.key === this._taskGeneratorGroupKey);
    }
    
    get taskGeneratorKey(): CaiTaskManagementSystemTaskGenerators.Entry | undefined {
      const collection = <CaiTaskManagementSystemTaskGenerators.Entry[]>this.collectionCache.getCollection(CaiTaskManagementSystemTaskGenerators.KEY, CaiTaskManagementSystemTaskGenerators.Entry);
      return collection.find(entry => entry.key === this._taskGeneratorKey);
    }
  }
}

export default CaiTaskManagementSystemTaskGeneratorGroupsGeneratorsJunctions;
