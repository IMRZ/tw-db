
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { SettlementSiegeActionOutcomes } from "./SettlementSiegeActionOutcomes";
import { CampaignPostBattleCaptiveOptionIds } from "./CampaignPostBattleCaptiveOptionIds";
import { SettlementSiegeActionEffects } from "./SettlementSiegeActionEffects";
import { SettlementSiegeActionOptionTooltips } from "./SettlementSiegeActionOptionTooltips";
import { CaiDiplomacyEvents } from "./CaiDiplomacyEvents";

export namespace SettlementSiegeActionOptions {
  export const KEY = new CollectionKey("settlement_siege_action_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly settlementSiegeActionOption: string;
    readonly _group: string;
    readonly _outcome: string;
    readonly _captivesOption: string;
    readonly _effects: string;
    readonly icon: string;
    readonly _tooltip: string;
    readonly _currentOwnerEvent: string;
    readonly _newOwnerEvent: string;
    readonly displayOrder: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.settlementSiegeActionOption = values["settlement_siege_action_option"];
      this._group = values["group"];
      this._outcome = values["outcome"];
      this._captivesOption = values["captives_option"];
      this._effects = values["effects"];
      this.icon = values["icon"];
      this._tooltip = values["tooltip"];
      this._currentOwnerEvent = values["current_owner_event"];
      this._newOwnerEvent = values["new_owner_event"];
      this.displayOrder = values["display_order"];
    }
    
    get group(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._group);
    }
    
    get outcome(): SettlementSiegeActionOutcomes.Entry | undefined {
      const collection = <SettlementSiegeActionOutcomes.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionOutcomes.KEY, SettlementSiegeActionOutcomes.Entry);
      return collection.find(entry => entry.outcome === this._outcome);
    }
    
    get captivesOption(): CampaignPostBattleCaptiveOptionIds.Entry | undefined {
      const collection = <CampaignPostBattleCaptiveOptionIds.Entry[]>this.collectionCache.getCollection(CampaignPostBattleCaptiveOptionIds.KEY, CampaignPostBattleCaptiveOptionIds.Entry);
      return collection.find(entry => entry.captiveOption === this._captivesOption);
    }
    
    get effects(): SettlementSiegeActionEffects.Entry | undefined {
      const collection = <SettlementSiegeActionEffects.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionEffects.KEY, SettlementSiegeActionEffects.Entry);
      return collection.find(entry => entry.effects === this._effects);
    }
    
    get tooltip(): SettlementSiegeActionOptionTooltips.Entry | undefined {
      const collection = <SettlementSiegeActionOptionTooltips.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionOptionTooltips.KEY, SettlementSiegeActionOptionTooltips.Entry);
      return collection.find(entry => entry.key === this._tooltip);
    }
    
    get currentOwnerEvent(): CaiDiplomacyEvents.Entry | undefined {
      const collection = <CaiDiplomacyEvents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyEvents.KEY, CaiDiplomacyEvents.Entry);
      return collection.find(entry => entry.id === this._currentOwnerEvent);
    }
    
    get newOwnerEvent(): CaiDiplomacyEvents.Entry | undefined {
      const collection = <CaiDiplomacyEvents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyEvents.KEY, CaiDiplomacyEvents.Entry);
      return collection.find(entry => entry.id === this._newOwnerEvent);
    }
  }
}

export default SettlementSiegeActionOptions;
