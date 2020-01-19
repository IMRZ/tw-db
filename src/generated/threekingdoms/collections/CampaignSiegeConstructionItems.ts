
import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldSiegeVehicles } from "./BattlefieldSiegeVehicles";
import { EffectBundles } from "./EffectBundles";
import { UiSiegeItemDetails } from "./UiSiegeItemDetails";

export namespace CampaignSiegeConstructionItems {
  export const KEY = new CollectionKey("campaign_siege_construction_items");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _battlefieldSiegeVehicle: string;
    readonly _besiegingForceEffectBundle: string;
    readonly besiegingForceEffectBundleTurns: number;
    readonly _besiegedGarrisonEffectBundle: string;
    readonly besiegedGarrisonEffectBundleTurns: number;
    readonly siegeEffortCost: number;
    readonly aiSelectionPriority: number;
    readonly recruitmentCap: number;
    readonly _uiSiegeItemDetails: string;
    readonly wallBreachesCausedWhenCompleted: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._battlefieldSiegeVehicle = values["battlefield_siege_vehicle"];
      this._besiegingForceEffectBundle = values["besieging_force_effect_bundle"];
      this.besiegingForceEffectBundleTurns = values["besieging_force_effect_bundle_turns"];
      this._besiegedGarrisonEffectBundle = values["besieged_garrison_effect_bundle"];
      this.besiegedGarrisonEffectBundleTurns = values["besieged_garrison_effect_bundle_turns"];
      this.siegeEffortCost = values["siege_effort_cost"];
      this.aiSelectionPriority = values["ai_selection_priority"];
      this.recruitmentCap = values["recruitment_cap"];
      this._uiSiegeItemDetails = values["ui_siege_item_details"];
      this.wallBreachesCausedWhenCompleted = values["wall_breaches_caused_when_completed"];
    }
    
    get battlefieldSiegeVehicle(): BattlefieldSiegeVehicles.Entry | undefined {
      const collection = <BattlefieldSiegeVehicles.Entry[]>this.collectionCache.getCollection(BattlefieldSiegeVehicles.KEY, BattlefieldSiegeVehicles.Entry);
      return collection.find(entry => entry.key === this._battlefieldSiegeVehicle);
    }
    
    get besiegingForceEffectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._besiegingForceEffectBundle);
    }
    
    get besiegedGarrisonEffectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._besiegedGarrisonEffectBundle);
    }
    
    get uiSiegeItemDetails(): UiSiegeItemDetails.Entry | undefined {
      const collection = <UiSiegeItemDetails.Entry[]>this.collectionCache.getCollection(UiSiegeItemDetails.KEY, UiSiegeItemDetails.Entry);
      return collection.find(entry => entry.key === this._uiSiegeItemDetails);
    }
  }
}

export default CampaignSiegeConstructionItems;
