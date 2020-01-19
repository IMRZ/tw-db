
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBattleTags } from "./CampaignBattleTags";

export namespace CampaignBattleTagTileUpgrades {
  export const KEY = new CollectionKey("campaign_battle_tag_tile_upgrades");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignBattleTag: string;
    readonly tileUpgradeId: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignBattleTag = values["campaign_battle_tag"];
      this.tileUpgradeId = values["tile_upgrade_id"];
    }
    
    get campaignBattleTag(): CampaignBattleTags.Entry | undefined {
      const collection = <CampaignBattleTags.Entry[]>this.collectionCache.getCollection(CampaignBattleTags.KEY, CampaignBattleTags.Entry);
      return collection.find(entry => entry.key === this._campaignBattleTag);
    }
  }
}

export default CampaignBattleTagTileUpgrades;
