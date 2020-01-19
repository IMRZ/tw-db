import { CollectionCache, CollectionKey } from "../../../common";
import { AgentActionsCharacterPositionInFactionEnums } from "./AgentActionsCharacterPositionInFactionEnums";
export declare namespace UndercoverActionsAdditionalActionsUiFilters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly agentGender: string;
        readonly _agentRole: string;
        constructor(collectionCache: CollectionCache, values: any);
        get agentRole(): AgentActionsCharacterPositionInFactionEnums.Entry | undefined;
    }
}
export default UndercoverActionsAdditionalActionsUiFilters;
