import { CollectionCache, CollectionKey } from "../../../common";
import { CaiTaskManagementSystemTaskGeneratorGroups } from "./CaiTaskManagementSystemTaskGeneratorGroups";
import { CaiTaskManagementSystemTaskGenerators } from "./CaiTaskManagementSystemTaskGenerators";
export declare namespace CaiTaskManagementSystemTaskGeneratorGroupsGeneratorsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _taskGeneratorGroupKey: string;
        readonly _taskGeneratorKey: string;
        readonly priority: number;
        constructor(collectionCache: CollectionCache, values: any);
        get taskGeneratorGroupKey(): CaiTaskManagementSystemTaskGeneratorGroups.Entry | undefined;
        get taskGeneratorKey(): CaiTaskManagementSystemTaskGenerators.Entry | undefined;
    }
}
export default CaiTaskManagementSystemTaskGeneratorGroupsGeneratorsJunctions;
