
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CapturePointTypes {
  export const KEY = new CollectionKey("capture_point_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreenName: string;
    readonly onscreenDescription: string;
    readonly iconName: string;
    readonly visibilitySpottingRange: number;
    readonly restoreToNeutral: boolean;
    readonly showInUi: boolean;
    readonly showInGameWorld: boolean;
    readonly benefitOriginalOwnerOnly: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreenName = values["onscreen_name"];
      this.onscreenDescription = values["onscreen_description"];
      this.iconName = values["icon_name"];
      this.visibilitySpottingRange = values["visibility_spotting_range"];
      this.restoreToNeutral = !!values["restore_to_neutral"];
      this.showInUi = !!values["show_in_ui"];
      this.showInGameWorld = !!values["show_in_game_world"];
      this.benefitOriginalOwnerOnly = !!values["benefit_original_owner_only"];
    }
    
  }
}

export default CapturePointTypes;
