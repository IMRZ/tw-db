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
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsAgentActionRecords.Entry | undefined;
        get agentActionRecord(): AgentActions.Entry | undefined;
    }
}
export default EffectBonusValueAgentActionRecordJunctions;
