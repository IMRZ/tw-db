import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
import { AgentSubtypes } from "./AgentSubtypes";
export declare namespace MinisterialPosititionToSubtypeRestrictions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ministerialPosition: string;
        readonly _agentSubtype: string;
        readonly localisedRestrictionReason: string;
        constructor(collectionCache: CollectionCache, values: any);
        get ministerialPosition(): MinisterialPositions.Entry | undefined;
        get agentSubtype(): AgentSubtypes.Entry | undefined;
    }
}
export default MinisterialPosititionToSubtypeRestrictions;
