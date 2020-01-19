import { CollectionCache, CollectionKey } from "../../../common";
import { AgentSubtypes } from "./AgentSubtypes";
import { Names } from "./Names";
import { Agents } from "./Agents";
import { UniqueAgentSpawnBehaviours } from "./UniqueAgentSpawnBehaviours";
export declare namespace UniqueAgents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agentSubtype: string;
        readonly _forename: number;
        readonly _surname: number;
        readonly _otherName: number;
        readonly _clanName: number;
        readonly _agentType: string;
        readonly _spawnBehaviour: string;
        readonly spawnViaUi: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get agentSubtype(): AgentSubtypes.Entry | undefined;
        get forename(): Names.Entry | undefined;
        get surname(): Names.Entry | undefined;
        get otherName(): Names.Entry | undefined;
        get clanName(): Names.Entry | undefined;
        get agentType(): Agents.Entry | undefined;
        get spawnBehaviour(): UniqueAgentSpawnBehaviours.Entry | undefined;
    }
}
export default UniqueAgents;
