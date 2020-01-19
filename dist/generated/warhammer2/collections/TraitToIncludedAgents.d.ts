import { CollectionCache, CollectionKey } from "../../../common";
import { TraitInfo } from "./TraitInfo";
import { Agents } from "./Agents";
export declare namespace TraitToIncludedAgents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _trait: string;
        readonly _agent: string;
        constructor(collectionCache: CollectionCache, values: any);
        get trait(): TraitInfo.Entry | undefined;
        get agent(): Agents.Entry | undefined;
    }
}
export default TraitToIncludedAgents;
