import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { Abilities } from "./Abilities";
export declare namespace AgentToAgentAbilities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agent: string;
        readonly _ability: string;
        readonly localisedAbilityName: string;
        readonly localisedAbilityDescription: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly agent: Agents.Entry | undefined;
        readonly ability: Abilities.Entry | undefined;
    }
}
export default AgentToAgentAbilities;
