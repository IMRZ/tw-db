
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CaiDiplomacyDealEvaluationDiplomaticEventRespondents } from "./CaiDiplomacyDealEvaluationDiplomaticEventRespondents";

export namespace CaiDiplomacyDealEvaluationEventsToCalculate {
  export const KEY = new CollectionKey("cai_diplomacy_deal_evaluation_events_to_calculate");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _treatyComponent: string;
    readonly _eventFrom: string;
    readonly _eventTo: string;
    readonly _eventActedOn: string;
    readonly eventParam: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._treatyComponent = values["treaty_component"];
      this._eventFrom = values["event_from"];
      this._eventTo = values["event_to"];
      this._eventActedOn = values["event_acted_on"];
      this.eventParam = values["event_param"];
    }
    
    get treatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._treatyComponent);
    }
    
    get eventFrom(): CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry | undefined {
      const collection = <CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyDealEvaluationDiplomaticEventRespondents.KEY, CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry);
      return collection.find(entry => entry.key === this._eventFrom);
    }
    
    get eventTo(): CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry | undefined {
      const collection = <CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyDealEvaluationDiplomaticEventRespondents.KEY, CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry);
      return collection.find(entry => entry.key === this._eventTo);
    }
    
    get eventActedOn(): CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry | undefined {
      const collection = <CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyDealEvaluationDiplomaticEventRespondents.KEY, CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry);
      return collection.find(entry => entry.key === this._eventActedOn);
    }
  }
}

export default CaiDiplomacyDealEvaluationEventsToCalculate;
