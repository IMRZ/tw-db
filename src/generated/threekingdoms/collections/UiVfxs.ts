
import { CollectionCache, CollectionKey } from "../../../common";
import { GameAreaEnums } from "./GameAreaEnums";

export namespace UiVfxs {
  export const KEY = new CollectionKey("ui_vfxs");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly vfxName: string;
    readonly _gameArea: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.vfxName = values["vfx_name"];
      this._gameArea = values["game_area"];
    }
    
    get gameArea(): GameAreaEnums.Entry | undefined {
      const collection = <GameAreaEnums.Entry[]>this.collectionCache.getCollection(GameAreaEnums.KEY, GameAreaEnums.Entry);
      return collection.find(entry => entry.key === this._gameArea);
    }
  }
}

export default UiVfxs;
