import { CollectionCache, CollectionKey } from "../../../common";
import { AgentActions } from "./AgentActions";
import { UndercoverActionsAdditionalActionsUiFilters } from "./UndercoverActionsAdditionalActionsUiFilters";
export declare namespace UndercoverActionsAdditionalActionsUiStrings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _action: string;
        readonly title: string;
        readonly description: string;
        readonly imageKey: string;
        readonly actionConfirm: string;
        readonly actionCancel: string;
        readonly _filter: string;
        readonly id: number;
        constructor(collectionCache: CollectionCache, values: any);
        get action(): AgentActions.Entry | undefined;
        get filter(): UndercoverActionsAdditionalActionsUiFilters.Entry | undefined;
    }
}
export default UndercoverActionsAdditionalActionsUiStrings;
