
import { CollectionCache, CollectionKey } from "../../../common";
import { Dilemmas } from "./Dilemmas";

export namespace TreasureHuntExtraInformations {
  export const KEY = new CollectionKey("treasure_hunt_extra_informations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _treasureHuntDilemmaKey: string;
    readonly option1Images: string;
    readonly option2Images: string;
    readonly option3Images: string;
    readonly option4Images: string;
    readonly overlayImage: string;
    readonly colorBlindModeOverlay: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._treasureHuntDilemmaKey = values["treasure_hunt_dilemma_key"];
      this.option1Images = values["option_1_images"];
      this.option2Images = values["option_2_images"];
      this.option3Images = values["option_3_images"];
      this.option4Images = values["option_4_images"];
      this.overlayImage = values["overlay_image"];
      this.colorBlindModeOverlay = values["color_blind_mode_overlay"];
    }
    
    get treasureHuntDilemmaKey(): Dilemmas.Entry | undefined {
      const collection = <Dilemmas.Entry[]>this.collectionCache.getCollection(Dilemmas.KEY, Dilemmas.Entry);
      return collection.find(entry => entry.key === this._treasureHuntDilemmaKey);
    }
  }
}

export default TreasureHuntExtraInformations;
