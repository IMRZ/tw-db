import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { Abilities } from "./Abilities";
import { ActionResults } from "./ActionResults";
import { AudioVoCampaignSpecialAbilityStates } from "./AudioVoCampaignSpecialAbilityStates";
import { AgentActionsCharacterPositionInFactionEnums } from "./AgentActionsCharacterPositionInFactionEnums";
export declare namespace AgentActions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agent: string;
        readonly _ability: string;
        readonly _criticalFailure: string;
        readonly _failure: string;
        readonly _opportuneFailure: string;
        readonly _success: string;
        readonly _criticalSuccess: string;
        readonly _cannotFail: string;
        readonly localisedActionName: string;
        readonly localisedActionDescription: string;
        readonly criticalSuccessProportionModifier: number;
        readonly opportuneFailureProportionModifier: number;
        readonly criticalFailureProportionModifier: number;
        readonly uniqueId: string;
        readonly chanceOfSuccess: number;
        readonly _voiceover: string;
        readonly iconPath: string;
        readonly baseCoverPointsCost: number;
        readonly baseUndercoverNetworkPointsCost: number;
        readonly actingCharacterLoyaltyLowerBound: number;
        readonly actingCharacterLoyaltyUpperBound: number;
        readonly actingCharacterRankLowerBound: number;
        readonly _actingCharacterPositionInFaction: string;
        readonly actingFactionUndercoverNetworkPointsLowerBound: number;
        constructor(collectionCache: CollectionCache, values: any);
        get agent(): Agents.Entry | undefined;
        get ability(): Abilities.Entry | undefined;
        get criticalFailure(): ActionResults.Entry | undefined;
        get failure(): ActionResults.Entry | undefined;
        get opportuneFailure(): ActionResults.Entry | undefined;
        get success(): ActionResults.Entry | undefined;
        get criticalSuccess(): ActionResults.Entry | undefined;
        get cannotFail(): ActionResults.Entry | undefined;
        get voiceover(): AudioVoCampaignSpecialAbilityStates.Entry | undefined;
        get actingCharacterPositionInFaction(): AgentActionsCharacterPositionInFactionEnums.Entry | undefined;
    }
}
export default AgentActions;
