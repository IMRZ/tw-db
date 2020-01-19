
import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionEffectGroups } from "./SettlementSiegeActionEffectGroups";

export namespace SettlementSiegeActionEffectVandaliseSecondarySlotOrDowngradePrimarySlots {
  export const KEY = new CollectionKey("settlement_siege_action_effect_vandalise_secondary_slot_or_downgrade_primary_slots");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effectGroup: string;
    readonly vandalisationPercentageChance: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effectGroup = values["effect_group"];
      this.vandalisationPercentageChance = values["vandalisation_percentage_chance"];
    }
    
    get effectGroup(): SettlementSiegeActionEffectGroups.Entry | undefined {
      const collection = <SettlementSiegeActionEffectGroups.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionEffectGroups.KEY, SettlementSiegeActionEffectGroups.Entry);
      return collection.find(entry => entry.effectGroup === this._effectGroup);
    }
  }
}

export default SettlementSiegeActionEffectVandaliseSecondarySlotOrDowngradePrimarySlots;
