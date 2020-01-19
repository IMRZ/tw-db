
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMaps } from "./CampaignMaps";
import { CampaignMapMasks } from "./CampaignMapMasks";
import { TexcExpansions } from "./TexcExpansions";

export namespace Campaigns {
  export const KEY = new CollectionKey("campaigns");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly campaignName: string;
    readonly onscreenName: string;
    readonly description: string;
    readonly _mapName: string;
    readonly exportable: boolean;
    readonly bulletList: string;
    readonly displayLocation: string;
    readonly isTutorial: boolean;
    readonly _mask: string;
    readonly availableForMp: boolean;
    readonly mpSortOrder: number;
    readonly _gameExpansionKey: string;
    readonly scriptPath: string;
    readonly battlePath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.campaignName = values["campaign_name"];
      this.onscreenName = values["onscreen_name"];
      this.description = values["description"];
      this._mapName = values["map_name"];
      this.exportable = !!values["exportable"];
      this.bulletList = values["bullet_list"];
      this.displayLocation = values["display_location"];
      this.isTutorial = !!values["is_tutorial"];
      this._mask = values["mask"];
      this.availableForMp = !!values["available_for_mp"];
      this.mpSortOrder = values["mp_sort_order"];
      this._gameExpansionKey = values["game_expansion_key"];
      this.scriptPath = values["script_path"];
      this.battlePath = values["battle_path"];
    }
    
    get mapName(): CampaignMaps.Entry | undefined {
      const collection = <CampaignMaps.Entry[]>this.collectionCache.getCollection(CampaignMaps.KEY, CampaignMaps.Entry);
      return collection.find(entry => entry.mapname === this._mapName);
    }
    
    get mask(): CampaignMapMasks.Entry | undefined {
      const collection = <CampaignMapMasks.Entry[]>this.collectionCache.getCollection(CampaignMapMasks.KEY, CampaignMapMasks.Entry);
      return collection.find(entry => entry.maskName === this._mask);
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
  }
}

export default Campaigns;
