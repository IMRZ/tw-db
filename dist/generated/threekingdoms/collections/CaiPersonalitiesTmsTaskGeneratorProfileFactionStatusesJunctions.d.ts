import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles } from "./CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles";
import { CaiFactionStatuses } from "./CaiFactionStatuses";
import { CaiTaskManagementSystemTaskGeneratorGroups } from "./CaiTaskManagementSystemTaskGeneratorGroups";
export declare namespace CaiPersonalitiesTmsTaskGeneratorProfileFactionStatusesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _taskGeneratorPolicyKey: string;
        readonly _caiActionStatusKey: string;
        readonly _taskGeneratorGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        get taskGeneratorPolicyKey(): CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles.Entry | undefined;
        get caiActionStatusKey(): CaiFactionStatuses.Entry | undefined;
        get taskGeneratorGroup(): CaiTaskManagementSystemTaskGeneratorGroups.Entry | undefined;
    }
}
export default CaiPersonalitiesTmsTaskGeneratorProfileFactionStatusesJunctions;
