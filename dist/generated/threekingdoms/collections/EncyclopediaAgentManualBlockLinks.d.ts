import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { EncyclopediaBlocks } from "./EncyclopediaBlocks";
export declare namespace EncyclopediaAgentManualBlockLinks {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agentKey: string;
        readonly _blockKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get agentKey(): Agents.Entry | undefined;
        get blockKey(): EncyclopediaBlocks.Entry | undefined;
    }
}
export default EncyclopediaAgentManualBlockLinks;
