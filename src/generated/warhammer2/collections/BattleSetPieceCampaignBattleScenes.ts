
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieces } from "./BattleSetPieces";

export namespace BattleSetPieceCampaignBattleScenes {
  export const KEY = new CollectionKey("battle_set_piece_campaign_battle_scenes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _battleSetPiece: string;
    readonly bmd: string;
    readonly environment: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._battleSetPiece = values["battle_set_piece"];
      this.bmd = values["bmd"];
      this.environment = values["environment"];
    }
    
    get battleSetPiece(): BattleSetPieces.Entry | undefined {
      const collection = <BattleSetPieces.Entry[]>this.collectionCache.getCollection(BattleSetPieces.KEY, BattleSetPieces.Entry);
      return collection.find(entry => entry.battleName === this._battleSetPiece);
    }
  }
}

export default BattleSetPieceCampaignBattleScenes;
