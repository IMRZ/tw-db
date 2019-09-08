
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBattleTypeEnums } from "./CampaignBattleTypeEnums";

export namespace CampaignAutoresolverBattleSituations {
  export const KEY = new CollectionKey("campaign_autoresolver_battle_situations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly _battleType: string;
    readonly nightBattle: string;
    readonly stance: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._battleType = values["battle_type"];
      this.nightBattle = values["night_battle"];
      this.stance = values["stance"];
    }
    
    get battleType(): CampaignBattleTypeEnums.Entry | undefined {
      const collection = <CampaignBattleTypeEnums.Entry[]>this.collectionCache.getCollection(CampaignBattleTypeEnums.KEY, CampaignBattleTypeEnums.Entry);
      return collection.find(entry => entry.key === this._battleType);
    }
  }
}

export default CampaignAutoresolverBattleSituations;
