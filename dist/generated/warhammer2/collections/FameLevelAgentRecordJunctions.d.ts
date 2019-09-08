import { CollectionCache, CollectionKey } from "../../../common";
import { FameLevels } from "./FameLevels";
import { Agents } from "./Agents";
export declare namespace FameLevelAgentRecordJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _fameLevel: number;
        readonly _agent: string;
        readonly cap: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly fameLevel: FameLevels.Entry | undefined;
        readonly agent: Agents.Entry | undefined;
    }
}
export default FameLevelAgentRecordJunctions;
