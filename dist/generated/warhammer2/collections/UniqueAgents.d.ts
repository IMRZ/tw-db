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
        readonly agentSubtype: AgentSubtypes.Entry | undefined;
        readonly forename: Names.Entry | undefined;
        readonly surname: Names.Entry | undefined;
        readonly otherName: Names.Entry | undefined;
        readonly clanName: Names.Entry | undefined;
        readonly agentType: Agents.Entry | undefined;
        readonly spawnBehaviour: UniqueAgentSpawnBehaviours.Entry | undefined;
    }
}
export default UniqueAgents;
