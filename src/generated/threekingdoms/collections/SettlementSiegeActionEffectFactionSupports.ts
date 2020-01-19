
import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionEffectGroups } from "./SettlementSiegeActionEffectGroups";

export namespace SettlementSiegeActionEffectFactionSupports {
  export const KEY = new CollectionKey("settlement_siege_action_effect_faction_supports");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly factionSupportValue: number;
    readonly _effectGroupRecord: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.factionSupportValue = values["faction_support_value"];
      this._effectGroupRecord = values["effect_group_record"];
    }
    
    get effectGroupRecord(): SettlementSiegeActionEffectGroups.Entry | undefined {
      const collection = <SettlementSiegeActionEffectGroups.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionEffectGroups.KEY, SettlementSiegeActionEffectGroups.Entry);
      return collection.find(entry => entry.effectGroup === this._effectGroupRecord);
    }
  }
}

export default SettlementSiegeActionEffectFactionSupports;
