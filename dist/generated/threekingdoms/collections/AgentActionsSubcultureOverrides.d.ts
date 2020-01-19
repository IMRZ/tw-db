import { CollectionCache, CollectionKey } from "../../../common";
import { AgentActions } from "./AgentActions";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace AgentActionsSubcultureOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agentAction: string;
        readonly _subculture: string;
        readonly title: string;
        readonly description: string;
        constructor(collectionCache: CollectionCache, values: any);
        get agentAction(): AgentActions.Entry | undefined;
        get subculture(): CulturesSubcultures.Entry | undefined;
    }
}
export default AgentActionsSubcultureOverrides;
