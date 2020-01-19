
import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionEffectGroups } from "./SettlementSiegeActionEffectGroups";

export namespace SettlementSiegeActionEffectPublicOrderEffects {
  export const KEY = new CollectionKey("settlement_siege_action_effect_public_order_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effectGroup: string;
    readonly resistanceToOccupationSameStateReligion: number;
    readonly resistanceToOccupationDifferentStateReligion: number;
    readonly conquestPenalty: number;
    readonly banditryPenalty: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effectGroup = values["effect_group"];
      this.resistanceToOccupationSameStateReligion = values["resistance_to_occupation_same_state_religion"];
      this.resistanceToOccupationDifferentStateReligion = values["resistance_to_occupation_different_state_religion"];
      this.conquestPenalty = values["conquest_penalty"];
      this.banditryPenalty = values["banditry_penalty"];
    }
    
    get effectGroup(): SettlementSiegeActionEffectGroups.Entry | undefined {
      const collection = <SettlementSiegeActionEffectGroups.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionEffectGroups.KEY, SettlementSiegeActionEffectGroups.Entry);
      return collection.find(entry => entry.effectGroup === this._effectGroup);
    }
  }
}

export default SettlementSiegeActionEffectPublicOrderEffects;
