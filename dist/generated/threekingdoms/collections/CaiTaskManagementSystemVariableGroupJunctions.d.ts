import { CollectionCache, CollectionKey } from "../../../common";
import { CaiTaskManagementSystemVariableGroups } from "./CaiTaskManagementSystemVariableGroups";
import { CaiTaskManagementSystemVariables } from "./CaiTaskManagementSystemVariables";
export declare namespace CaiTaskManagementSystemVariableGroupJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _groupKey: string;
        readonly _variableKey: string;
        readonly value: number;
        constructor(collectionCache: CollectionCache, values: any);
        get groupKey(): CaiTaskManagementSystemVariableGroups.Entry | undefined;
        get variableKey(): CaiTaskManagementSystemVariables.Entry | undefined;
    }
}
export default CaiTaskManagementSystemVariableGroupJunctions;
