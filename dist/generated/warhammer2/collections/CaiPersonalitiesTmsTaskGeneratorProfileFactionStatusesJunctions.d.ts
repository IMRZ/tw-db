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
        readonly taskGeneratorPolicyKey: CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles.Entry | undefined;
        readonly caiActionStatusKey: CaiFactionStatuses.Entry | undefined;
        readonly taskGeneratorGroup: CaiTaskManagementSystemTaskGeneratorGroups.Entry | undefined;
    }
}
export default CaiPersonalitiesTmsTaskGeneratorProfileFactionStatusesJunctions;
