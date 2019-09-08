import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles } from "./CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles";
import { CaiStrategicContextTypes } from "./CaiStrategicContextTypes";
import { CaiTaskManagementSystemTaskGeneratorGroups } from "./CaiTaskManagementSystemTaskGeneratorGroups";
export declare namespace CaiPersonalitiesTmsTaskGeneratorProfilesStrategicContextsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _taskGeneratorProfileKey: string;
        readonly _strategicContextKey: string;
        readonly forUseWhenTheFactionHasRegions: boolean;
        readonly _generatorGroupKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly taskGeneratorProfileKey: CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles.Entry | undefined;
        readonly strategicContextKey: CaiStrategicContextTypes.Entry | undefined;
        readonly generatorGroupKey: CaiTaskManagementSystemTaskGeneratorGroups.Entry | undefined;
    }
}
export default CaiPersonalitiesTmsTaskGeneratorProfilesStrategicContextsJunctions;
