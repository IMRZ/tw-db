import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityOccupationDecisionComponents } from "./CaiPersonalityOccupationDecisionComponents";
import { CaiTaskManagementSystemTaskTypes } from "./CaiTaskManagementSystemTaskTypes";
import { SettlementSiegeActionOptions } from "./SettlementSiegeActionOptions";
export declare namespace CaiPersonalityOccupationDecisionPriorities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _componentId: string;
        readonly _taskId: string;
        readonly _decisionId: string;
        readonly settledPriorityTarget: number;
        readonly settledPriorityOpportunistic: number;
        readonly regionlessPriorityTarget: number;
        readonly regionlessPriorityOpportunistic: number;
        readonly hordePriorityTarget: number;
        readonly hordePriorityOpportunistic: number;
        readonly migratingPriorityTarget: number;
        readonly migratingPriorityOpportunistic: number;
        constructor(collectionCache: CollectionCache, values: any);
        get componentId(): CaiPersonalityOccupationDecisionComponents.Entry | undefined;
        get taskId(): CaiTaskManagementSystemTaskTypes.Entry | undefined;
        get decisionId(): SettlementSiegeActionOptions.Entry | undefined;
    }
}
export default CaiPersonalityOccupationDecisionPriorities;
