import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesTaskManagementSystemVariableProfiles } from "./CaiPersonalitiesTaskManagementSystemVariableProfiles";
import { CaiFactionStatuses } from "./CaiFactionStatuses";
import { CaiTaskManagementSystemVariableGroups } from "./CaiTaskManagementSystemVariableGroups";
export declare namespace CaiPersonalitiesTaskManagementSystemVariableProfileFactionStatusesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _variableGroupProfileKey: string;
        readonly _caiFactionStatusKey: string;
        readonly _variableGroupKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get variableGroupProfileKey(): CaiPersonalitiesTaskManagementSystemVariableProfiles.Entry | undefined;
        get caiFactionStatusKey(): CaiFactionStatuses.Entry | undefined;
        get variableGroupKey(): CaiTaskManagementSystemVariableGroups.Entry | undefined;
    }
}
export default CaiPersonalitiesTaskManagementSystemVariableProfileFactionStatusesJunctions;
