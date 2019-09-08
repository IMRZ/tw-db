
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieceCampaignBattleScenes } from "./BattleSetPieceCampaignBattleScenes";

export namespace BattleSetPieceCampaignBattleSceneViewConfigurations {
  export const KEY = new CollectionKey("battle_set_piece_campaign_battle_scene_view_configurations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _setPieceBattleScene: string;
    readonly separation: number;
    readonly cameraDistance: number;
    readonly cameraHeight: number;
    readonly scale: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._setPieceBattleScene = values["set_piece_battle_scene"];
      this.separation = values["separation"];
      this.cameraDistance = values["camera_distance"];
      this.cameraHeight = values["camera_height"];
      this.scale = values["scale"];
    }
    
    get setPieceBattleScene(): BattleSetPieceCampaignBattleScenes.Entry | undefined {
      const collection = <BattleSetPieceCampaignBattleScenes.Entry[]>this.collectionCache.getCollection(BattleSetPieceCampaignBattleScenes.KEY, BattleSetPieceCampaignBattleScenes.Entry);
      return collection.find(entry => entry._battleSetPiece === this._setPieceBattleScene);
    }
  }
}

export default BattleSetPieceCampaignBattleSceneViewConfigurations;
