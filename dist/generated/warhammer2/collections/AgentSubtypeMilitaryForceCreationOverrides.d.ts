import { CollectionCache, CollectionKey } from "../../../common";
import { AgentSubtypes } from "./AgentSubtypes";
import { MilitaryForceTypes } from "./MilitaryForceTypes";
export declare namespace AgentSubtypeMilitaryForceCreationOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agentSubtype: string;
        readonly _militaryForceType: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly agentSubtype: AgentSubtypes.Entry | undefined;
        readonly militaryForceType: MilitaryForceTypes.Entry | undefined;
    }
}
export default AgentSubtypeMilitaryForceCreationOverrides;
