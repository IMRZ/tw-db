
import { CollectionCache, CollectionKey } from "../../../common";
import { GameAreaEnums } from "./GameAreaEnums";

export namespace UiLargeImages {
  export const KEY = new CollectionKey("ui_large_images");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly imagePath: string;
    readonly _gameArea: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.imagePath = values["image_path"];
      this._gameArea = values["game_area"];
    }
    
    get gameArea(): GameAreaEnums.Entry | undefined {
      const collection = <GameAreaEnums.Entry[]>this.collectionCache.getCollection(GameAreaEnums.KEY, GameAreaEnums.Entry);
      return collection.find(entry => entry.key === this._gameArea);
    }
  }
}

export default UiLargeImages;
