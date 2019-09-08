
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBattleTypeEnums } from "./CampaignBattleTypeEnums";
import { CampaignMapPlayableAreas } from "./CampaignMapPlayableAreas";

export namespace CampaignBattlePresets {
  export const KEY = new CollectionKey("campaign_battle_presets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreenName: string;
    readonly description: string;
    readonly coordX: number;
    readonly coordY: number;
    readonly tileUpgrade: string;
    readonly _battleType: string;
    readonly isUniqueSettlement: boolean;
    readonly _campaignMap: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreenName = values["onscreen_name"];
      this.description = values["description"];
      this.coordX = values["coord_x"];
      this.coordY = values["coord_y"];
      this.tileUpgrade = values["tile_upgrade"];
      this._battleType = values["battle_type"];
      this.isUniqueSettlement = !!values["is_unique_settlement"];
      this._campaignMap = values["campaign_map"];
    }
    
    get battleType(): CampaignBattleTypeEnums.Entry | undefined {
      const collection = <CampaignBattleTypeEnums.Entry[]>this.collectionCache.getCollection(CampaignBattleTypeEnums.KEY, CampaignBattleTypeEnums.Entry);
      return collection.find(entry => entry.key === this._battleType);
    }
    
    get campaignMap(): CampaignMapPlayableAreas.Entry | undefined {
      const collection = <CampaignMapPlayableAreas.Entry[]>this.collectionCache.getCollection(CampaignMapPlayableAreas.KEY, CampaignMapPlayableAreas.Entry);
      return collection.find(entry => entry.index === this._campaignMap);
    }
  }
}

export default CampaignBattlePresets;
