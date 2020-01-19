import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { EncyclopediaPages } from "./EncyclopediaPages";
export declare namespace EncyclopediaAgentManualPageLinks {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agentKey: string;
        readonly _pageKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get agentKey(): Agents.Entry | undefined;
        get pageKey(): EncyclopediaPages.Entry | undefined;
    }
}
export default EncyclopediaAgentManualPageLinks;
