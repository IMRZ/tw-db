import { CollectionCache, CollectionKey } from "../../../common";
import { CaiTaskManagementSystemTaskGeneratorGroups } from "./CaiTaskManagementSystemTaskGeneratorGroups";
export declare namespace CaiTaskManagementSystemTaskGeneratorGroupOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _taskGeneratorGroup: string;
        readonly _parentTaskGeneratorGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly taskGeneratorGroup: CaiTaskManagementSystemTaskGeneratorGroups.Entry | undefined;
        readonly parentTaskGeneratorGroup: CaiTaskManagementSystemTaskGeneratorGroups.Entry | undefined;
    }
}
export default CaiTaskManagementSystemTaskGeneratorGroupOverrides;
