import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsAgentActionRecords } from "./CampaignBonusValueIdsAgentActionRecords";
import { AgentActions } from "./AgentActions";
export declare namespace EffectBonusValueAgentActionRecordJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _agentActionRecord: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsAgentActionRecords.Entry | undefined;
        readonly agentActionRecord: AgentActions.Entry | undefined;
    }
}
export default EffectBonusValueAgentActionRecordJunctions;
