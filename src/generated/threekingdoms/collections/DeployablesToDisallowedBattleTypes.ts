
import { CollectionCache, CollectionKey } from "../../../common";
import { Deployables } from "./Deployables";
import { CampaignBattleTypeEnums } from "./CampaignBattleTypeEnums";

export namespace DeployablesToDisallowedBattleTypes {
  export const KEY = new CollectionKey("deployables_to_disallowed_battle_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _deployables: string;
    readonly _campaignBattleType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._deployables = values["deployables"];
      this._campaignBattleType = values["campaign_battle_type"];
    }
    
    get deployables(): Deployables.Entry | undefined {
      const collection = <Deployables.Entry[]>this.collectionCache.getCollection(Deployables.KEY, Deployables.Entry);
      return collection.find(entry => entry.key === this._deployables);
    }
    
    get campaignBattleType(): CampaignBattleTypeEnums.Entry | undefined {
      const collection = <CampaignBattleTypeEnums.Entry[]>this.collectionCache.getCollection(CampaignBattleTypeEnums.KEY, CampaignBattleTypeEnums.Entry);
      return collection.find(entry => entry.key === this._campaignBattleType);
    }
  }
}

export default DeployablesToDisallowedBattleTypes;
