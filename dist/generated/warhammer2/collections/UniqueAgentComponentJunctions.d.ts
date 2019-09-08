import { CollectionCache, CollectionKey } from "../../../common";
import { UniqueAgents } from "./UniqueAgents";
import { UniqueAgentComponents } from "./UniqueAgentComponents";
export declare namespace UniqueAgentComponentJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _uniqueAgent: string;
        readonly _component: string;
        readonly value: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly uniqueAgent: UniqueAgents.Entry | undefined;
        readonly component: UniqueAgentComponents.Entry | undefined;
    }
}
export default UniqueAgentComponentJunctions;
