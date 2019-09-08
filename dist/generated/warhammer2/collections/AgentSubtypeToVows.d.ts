import { CollectionCache, CollectionKey } from "../../../common";
import { AgentSubtypes } from "./AgentSubtypes";
import { BretonniaVows } from "./BretonniaVows";
export declare namespace AgentSubtypeToVows {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agentSubtype: string;
        readonly _vow: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly agentSubtype: AgentSubtypes.Entry | undefined;
        readonly vow: BretonniaVows.Entry | undefined;
    }
}
export default AgentSubtypeToVows;
