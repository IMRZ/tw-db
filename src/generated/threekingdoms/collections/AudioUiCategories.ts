
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioUiCategories {
  export const KEY = new CollectionKey("audio_ui_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly leftClick: string;
    readonly rightClick: string;
    readonly mouseOn: string;
    readonly mouseOff: string;
    readonly dragStart: string;
    readonly dragStop: string;
    readonly shortcut: string;
    readonly panelOpened: string;
    readonly panelClosed: string;
    readonly doubleLeftClick: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.leftClick = values["left_click"];
      this.rightClick = values["right_click"];
      this.mouseOn = values["mouse_on"];
      this.mouseOff = values["mouse_off"];
      this.dragStart = values["drag_start"];
      this.dragStop = values["drag_stop"];
      this.shortcut = values["shortcut"];
      this.panelOpened = values["panel_opened"];
      this.panelClosed = values["panel_closed"];
      this.doubleLeftClick = values["double_left_click"];
    }
    
  }
}

export default AudioUiCategories;
