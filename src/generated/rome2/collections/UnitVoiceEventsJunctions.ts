
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitVoiceEventsJunctions {
  export const KEY = new CollectionKey("unit_voice_events_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unitVoiceCategoryKey: any;
    readonly _voiceTypeKey: any;
    readonly _voiceEventKey: any;
    readonly _soundEventKey: any;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unitVoiceCategoryKey = values["unit_voice_category_key"];
      this._voiceTypeKey = values["voice_type_key"];
      this._voiceEventKey = values["voice_event_key"];
      this._soundEventKey = values["sound_event_key"];
    }
    
  }
}

export default UnitVoiceEventsJunctions;
