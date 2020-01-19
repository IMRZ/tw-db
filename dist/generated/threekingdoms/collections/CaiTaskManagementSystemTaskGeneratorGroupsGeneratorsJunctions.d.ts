import { CollectionCache, CollectionKey } from "../../../common";
import { CaiTaskManagementSystemTaskGeneratorGroups } from "./CaiTaskManagementSystemTaskGeneratorGroups";
import { CaiTaskManagementSystemTaskGenerators } from "./CaiTaskManagementSystemTaskGenerators";
import { CaiTaskManagementSystemTaskGeneratorVariableGroups } from "./CaiTaskManagementSystemTaskGeneratorVariableGroups";
export declare namespace CaiTaskManagementSystemTaskGeneratorGroupsGeneratorsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _taskGeneratorGroupKey: string;
        readonly _taskGeneratorKey: string;
        readonly priority: number;
        readonly _taskGeneratorVariableGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        get taskGeneratorGroupKey(): CaiTaskManagementSystemTaskGeneratorGroups.Entry | undefined;
        get taskGeneratorKey(): CaiTaskManagementSystemTaskGenerators.Entry | undefined;
        get taskGeneratorVariableGroup(): CaiTaskManagementSystemTaskGeneratorVariableGroups.Entry | undefined;
    }
}
export default CaiTaskManagementSystemTaskGeneratorGroupsGeneratorsJunctions;
