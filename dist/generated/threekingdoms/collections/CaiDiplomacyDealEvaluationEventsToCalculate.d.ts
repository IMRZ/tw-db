import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CaiDiplomacyDealEvaluationDiplomaticEventRespondents } from "./CaiDiplomacyDealEvaluationDiplomaticEventRespondents";
export declare namespace CaiDiplomacyDealEvaluationEventsToCalculate {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _treatyComponent: string;
        readonly _eventFrom: string;
        readonly _eventTo: string;
        readonly _eventActedOn: string;
        readonly eventParam: string;
        constructor(collectionCache: CollectionCache, values: any);
        get treatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined;
        get eventFrom(): CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry | undefined;
        get eventTo(): CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry | undefined;
        get eventActedOn(): CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry | undefined;
    }
}
export default CaiDiplomacyDealEvaluationEventsToCalculate;
