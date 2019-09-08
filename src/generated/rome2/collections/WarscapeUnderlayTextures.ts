
import { CollectionCache, CollectionKey } from "../../../common";


export namespace WarscapeUnderlayTextures {
  export const KEY = new CollectionKey("warscape_underlay_textures");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly underlayKey: string;
    readonly filename: string;
    readonly filepath: string;
    readonly levels: number;
    readonly orientationAngle: number;
    readonly width: number;
    readonly height: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.underlayKey = values["underlay_key"];
      this.filename = values["filename"];
      this.filepath = values["filepath"];
      this.levels = values["levels"];
      this.orientationAngle = values["orientation-angle"];
      this.width = values["width"];
      this.height = values["height"];
    }
    
  }
}

export default WarscapeUnderlayTextures;
