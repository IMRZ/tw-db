
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleCinematicEvents } from "./BattleCinematicEvents";
import { AudioVoAideDeCampStates } from "./AudioVoAideDeCampStates";

export namespace AideDeCampSpeeches {
  export const KEY = new CollectionKey("aide_de_camp_speeches");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly text: string;
    readonly pictureInPicture: boolean;
    readonly offsetAngle: number;
    readonly offsetRange: number;
    readonly circumventCooldown: boolean;
    readonly _cinematicEvent: string;
    readonly iconName: string;
    readonly uiDurationMs: number;
    readonly hasWorldspaceUiPing: boolean;
    readonly _voiceover: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.text = values["text"];
      this.pictureInPicture = !!values["picture_in_picture"];
      this.offsetAngle = values["offset_angle"];
      this.offsetRange = values["offset_range"];
      this.circumventCooldown = !!values["circumvent_cooldown"];
      this._cinematicEvent = values["cinematic_event"];
      this.iconName = values["icon_name"];
      this.uiDurationMs = values["ui_duration_ms"];
      this.hasWorldspaceUiPing = !!values["has_worldspace_ui_ping"];
      this._voiceover = values["voiceover"];
    }
    
    get cinematicEvent(): BattleCinematicEvents.Entry | undefined {
      const collection = <BattleCinematicEvents.Entry[]>this.collectionCache.getCollection(BattleCinematicEvents.KEY, BattleCinematicEvents.Entry);
      return collection.find(entry => entry.key === this._cinematicEvent);
    }
    
    get voiceover(): AudioVoAideDeCampStates.Entry | undefined {
      const collection = <AudioVoAideDeCampStates.Entry[]>this.collectionCache.getCollection(AudioVoAideDeCampStates.KEY, AudioVoAideDeCampStates.Entry);
      return collection.find(entry => entry.name === this._voiceover);
    }
  }
}

export default AideDeCampSpeeches;
