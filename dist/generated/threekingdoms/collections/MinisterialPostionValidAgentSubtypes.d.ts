import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositionsCultureDetails } from "./MinisterialPositionsCultureDetails";
import { AgentSubtypes } from "./AgentSubtypes";
export declare namespace MinisterialPostionValidAgentSubtypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ministerialPositionCulturalVariant: string;
        readonly _agentSubtype: string;
        constructor(collectionCache: CollectionCache, values: any);
        get ministerialPositionCulturalVariant(): MinisterialPositionsCultureDetails.Entry | undefined;
        get agentSubtype(): AgentSubtypes.Entry | undefined;
    }
}
export default MinisterialPostionValidAgentSubtypes;
