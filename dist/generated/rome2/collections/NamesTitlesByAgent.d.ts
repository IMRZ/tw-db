import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
export declare namespace NamesTitlesByAgent {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agentType: string;
        readonly highestTitle: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly agentType: Agents.Entry | undefined;
    }
}
export default NamesTitlesByAgent;
