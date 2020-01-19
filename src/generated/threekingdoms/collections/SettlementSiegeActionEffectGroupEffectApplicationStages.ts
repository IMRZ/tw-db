
import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionEffects } from "./SettlementSiegeActionEffects";
import { SettlementSiegeActionEffectApplicationStages } from "./SettlementSiegeActionEffectApplicationStages";
import { SettlementSiegeActionEffectGroups } from "./SettlementSiegeActionEffectGroups";

export namespace SettlementSiegeActionEffectGroupEffectApplicationStages {
  export const KEY = new CollectionKey("settlement_siege_action_effect_group_effect_application_stages");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _applicationStage: string;
    readonly _effectGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._applicationStage = values["application_stage"];
      this._effectGroup = values["effect_group"];
    }
    
    get effect(): SettlementSiegeActionEffects.Entry | undefined {
      const collection = <SettlementSiegeActionEffects.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionEffects.KEY, SettlementSiegeActionEffects.Entry);
      return collection.find(entry => entry.effects === this._effect);
    }
    
    get applicationStage(): SettlementSiegeActionEffectApplicationStages.Entry | undefined {
      const collection = <SettlementSiegeActionEffectApplicationStages.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionEffectApplicationStages.KEY, SettlementSiegeActionEffectApplicationStages.Entry);
      return collection.find(entry => entry.applicationStage === this._applicationStage);
    }
    
    get effectGroup(): SettlementSiegeActionEffectGroups.Entry | undefined {
      const collection = <SettlementSiegeActionEffectGroups.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionEffectGroups.KEY, SettlementSiegeActionEffectGroups.Entry);
      return collection.find(entry => entry.effectGroup === this._effectGroup);
    }
  }
}

export default SettlementSiegeActionEffectGroupEffectApplicationStages;
