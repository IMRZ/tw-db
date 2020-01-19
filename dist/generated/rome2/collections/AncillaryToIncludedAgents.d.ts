import { CollectionCache, CollectionKey } from "../../../common";
import { AncillaryInfo } from "./AncillaryInfo";
import { Agents } from "./Agents";
export declare namespace AncillaryToIncludedAgents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ancillary: string;
        readonly _agent: string;
        constructor(collectionCache: CollectionCache, values: any);
        get ancillary(): AncillaryInfo.Entry | undefined;
        get agent(): Agents.Entry | undefined;
    }
}
export default AncillaryToIncludedAgents;
