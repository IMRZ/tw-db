import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConditionSets } from "./CaiConditionSets";
import { CaiConditions } from "./CaiConditions";
import { CaiDiplomacyDealEvaluationDiplomaticEventRespondents } from "./CaiDiplomacyDealEvaluationDiplomaticEventRespondents";
import { CaiFactionStatuses } from "./CaiFactionStatuses";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CaiStrategicStances } from "./CaiStrategicStances";
import { Factions } from "./Factions";
export declare namespace CaiDiplomacyDealGenerationConditionSetJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _conditionSetKey: string;
        readonly _conditionKey: string;
        readonly evaluatesTo: boolean;
        readonly _paramFaction: string;
        readonly _paramStatus: string;
        readonly _paramTreaty: string;
        readonly _paramStance: string;
        readonly _owner: string;
        readonly paramValue: number;
        readonly _paramFactionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get conditionSetKey(): CaiConditionSets.Entry | undefined;
        get conditionKey(): CaiConditions.Entry | undefined;
        get paramFaction(): CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry | undefined;
        get paramStatus(): CaiFactionStatuses.Entry | undefined;
        get paramTreaty(): CampaignDiplomacyTreatyComponents.Entry | undefined;
        get paramStance(): CaiStrategicStances.Entry | undefined;
        get owner(): CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry | undefined;
        get paramFactionKey(): Factions.Entry | undefined;
    }
}
export default CaiDiplomacyDealGenerationConditionSetJunctions;
