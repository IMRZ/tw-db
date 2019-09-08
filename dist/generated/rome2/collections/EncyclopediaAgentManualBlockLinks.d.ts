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
        readonly agentKey: Agents.Entry | undefined;
        readonly blockKey: EncyclopediaBlocks.Entry | undefined;
    }
}
export default EncyclopediaAgentManualBlockLinks;
