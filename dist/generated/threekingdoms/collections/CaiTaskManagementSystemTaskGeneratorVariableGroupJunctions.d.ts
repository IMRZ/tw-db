import { CollectionCache, CollectionKey } from "../../../common";
import { CaiTaskManagementSystemTaskGeneratorVariableGroups } from "./CaiTaskManagementSystemTaskGeneratorVariableGroups";
import { CaiTaskManagementSystemTaskGeneratorVariables } from "./CaiTaskManagementSystemTaskGeneratorVariables";
export declare namespace CaiTaskManagementSystemTaskGeneratorVariableGroupJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _variableGroupKey: string;
        readonly _variableKey: string;
        readonly value: string;
        constructor(collectionCache: CollectionCache, values: any);
        get variableGroupKey(): CaiTaskManagementSystemTaskGeneratorVariableGroups.Entry | undefined;
        get variableKey(): CaiTaskManagementSystemTaskGeneratorVariables.Entry | undefined;
    }
}
export default CaiTaskManagementSystemTaskGeneratorVariableGroupJunctions;
