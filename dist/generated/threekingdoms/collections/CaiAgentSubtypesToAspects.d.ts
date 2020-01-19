import { CollectionCache, CollectionKey } from "../../../common";
import { AgentSubtypes } from "./AgentSubtypes";
import { CaiAspects } from "./CaiAspects";
export declare namespace CaiAgentSubtypesToAspects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agentSubtype: string;
        readonly _aspect: string;
        readonly weight: number;
        constructor(collectionCache: CollectionCache, values: any);
        get agentSubtype(): AgentSubtypes.Entry | undefined;
        get aspect(): CaiAspects.Entry | undefined;
    }
}
export default CaiAgentSubtypesToAspects;
