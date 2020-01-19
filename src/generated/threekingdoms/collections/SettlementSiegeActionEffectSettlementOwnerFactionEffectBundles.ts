
import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionEffectGroups } from "./SettlementSiegeActionEffectGroups";
import { EffectBundles } from "./EffectBundles";

export namespace SettlementSiegeActionEffectSettlementOwnerFactionEffectBundles {
  export const KEY = new CollectionKey("settlement_siege_action_effect_settlement_owner_faction_effect_bundles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effectGroup: string;
    readonly _effectBundle: string;
    readonly turns: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effectGroup = values["effect_group"];
      this._effectBundle = values["effect_bundle"];
      this.turns = values["turns"];
    }
    
    get effectGroup(): SettlementSiegeActionEffectGroups.Entry | undefined {
      const collection = <SettlementSiegeActionEffectGroups.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionEffectGroups.KEY, SettlementSiegeActionEffectGroups.Entry);
      return collection.find(entry => entry.effectGroup === this._effectGroup);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
  }
}

export default SettlementSiegeActionEffectSettlementOwnerFactionEffectBundles;
