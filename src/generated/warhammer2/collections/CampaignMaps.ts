
import { CollectionCache, CollectionKey } from "../../../common";
import { TexcExpansions } from "./TexcExpansions";

export namespace CampaignMaps {
  export const KEY = new CollectionKey("campaign_maps");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly mapname: string;
    readonly minx: number;
    readonly miny: number;
    readonly maxx: number;
    readonly maxy: number;
    readonly _gameExpansionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.mapname = values["mapname"];
      this.minx = values["minx"];
      this.miny = values["miny"];
      this.maxx = values["maxx"];
      this.maxy = values["maxy"];
      this._gameExpansionKey = values["game_expansion_key"];
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
  }
}

export default CampaignMaps;
