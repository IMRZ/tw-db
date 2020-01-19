
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConditionSets } from "./CaiConditionSets";
import { CaiConditions } from "./CaiConditions";
import { CaiDiplomacyDealEvaluationDiplomaticEventRespondents } from "./CaiDiplomacyDealEvaluationDiplomaticEventRespondents";
import { CaiFactionStatuses } from "./CaiFactionStatuses";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CaiStrategicStances } from "./CaiStrategicStances";
import { Factions } from "./Factions";

export namespace CaiDiplomacyDealGenerationConditionSetJunctions {
  export const KEY = new CollectionKey("cai_diplomacy_deal_generation_condition_set_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

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

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._conditionSetKey = values["condition_set_key"];
      this._conditionKey = values["condition_key"];
      this.evaluatesTo = !!values["evaluates_to"];
      this._paramFaction = values["param_faction"];
      this._paramStatus = values["param_status"];
      this._paramTreaty = values["param_treaty"];
      this._paramStance = values["param_stance"];
      this._owner = values["owner"];
      this.paramValue = values["param_value"];
      this._paramFactionKey = values["param_faction_key"];
    }
    
    get conditionSetKey(): CaiConditionSets.Entry | undefined {
      const collection = <CaiConditionSets.Entry[]>this.collectionCache.getCollection(CaiConditionSets.KEY, CaiConditionSets.Entry);
      return collection.find(entry => entry.key === this._conditionSetKey);
    }
    
    get conditionKey(): CaiConditions.Entry | undefined {
      const collection = <CaiConditions.Entry[]>this.collectionCache.getCollection(CaiConditions.KEY, CaiConditions.Entry);
      return collection.find(entry => entry.key === this._conditionKey);
    }
    
    get paramFaction(): CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry | undefined {
      const collection = <CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyDealEvaluationDiplomaticEventRespondents.KEY, CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry);
      return collection.find(entry => entry.key === this._paramFaction);
    }
    
    get paramStatus(): CaiFactionStatuses.Entry | undefined {
      const collection = <CaiFactionStatuses.Entry[]>this.collectionCache.getCollection(CaiFactionStatuses.KEY, CaiFactionStatuses.Entry);
      return collection.find(entry => entry.factionStatus === this._paramStatus);
    }
    
    get paramTreaty(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._paramTreaty);
    }
    
    get paramStance(): CaiStrategicStances.Entry | undefined {
      const collection = <CaiStrategicStances.Entry[]>this.collectionCache.getCollection(CaiStrategicStances.KEY, CaiStrategicStances.Entry);
      return collection.find(entry => entry.key === this._paramStance);
    }
    
    get owner(): CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry | undefined {
      const collection = <CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyDealEvaluationDiplomaticEventRespondents.KEY, CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry);
      return collection.find(entry => entry.key === this._owner);
    }
    
    get paramFactionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._paramFactionKey);
    }
  }
}

export default CaiDiplomacyDealGenerationConditionSetJunctions;
