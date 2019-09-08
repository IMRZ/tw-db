
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleCinematicEvents } from "./BattleCinematicEvents";

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
    }
    
    get cinematicEvent(): BattleCinematicEvents.Entry | undefined {
      const collection = <BattleCinematicEvents.Entry[]>this.collectionCache.getCollection(BattleCinematicEvents.KEY, BattleCinematicEvents.Entry);
      return collection.find(entry => entry.key === this._cinematicEvent);
    }
  }
}

export default AideDeCampSpeeches;
