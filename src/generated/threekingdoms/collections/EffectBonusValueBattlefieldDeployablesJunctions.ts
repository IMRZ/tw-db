
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsBattlefieldDeployables } from "./CampaignBonusValueIdsBattlefieldDeployables";
import { Deployables } from "./Deployables";

export namespace EffectBonusValueBattlefieldDeployablesJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_battlefield_deployables_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _battlefieldDeployable: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._battlefieldDeployable = values["battlefield_deployable"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsBattlefieldDeployables.Entry | undefined {
      const collection = <CampaignBonusValueIdsBattlefieldDeployables.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsBattlefieldDeployables.KEY, CampaignBonusValueIdsBattlefieldDeployables.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get battlefieldDeployable(): Deployables.Entry | undefined {
      const collection = <Deployables.Entry[]>this.collectionCache.getCollection(Deployables.KEY, Deployables.Entry);
      return collection.find(entry => entry.key === this._battlefieldDeployable);
    }
  }
}

export default EffectBonusValueBattlefieldDeployablesJunctions;
