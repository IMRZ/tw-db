
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Cultures {
  export const KEY = new CollectionKey("cultures");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly index: number;
    readonly fallbackUiCulture: string;
    readonly name: string;
    readonly uiBackgroundImage: string;
    readonly audioState: string;
    readonly uiGroupByCulture: boolean;
    readonly audioRtpc: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.index = values["index"];
      this.fallbackUiCulture = values["fallback_ui_culture"];
      this.name = values["name"];
      this.uiBackgroundImage = values["ui_background_image"];
      this.audioState = values["audio_state"];
      this.uiGroupByCulture = !!values["ui_group_by_culture"];
      this.audioRtpc = values["audio_rtpc"];
    }
    
  }
}

export default Cultures;
