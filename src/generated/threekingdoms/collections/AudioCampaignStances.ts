
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignStances } from "./CampaignStances";

export namespace AudioCampaignStances {
  export const KEY = new CollectionKey("audio_campaign_stances");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _stance: string;
    readonly uiSoundEvent: string;
    readonly enterEvent: string;
    readonly leaveEvent: string;
    readonly reverb: boolean;
    readonly obstruction: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._stance = values["stance"];
      this.uiSoundEvent = values["ui_sound_event"];
      this.enterEvent = values["enter_event"];
      this.leaveEvent = values["leave_event"];
      this.reverb = !!values["reverb"];
      this.obstruction = !!values["obstruction"];
    }
    
    get stance(): CampaignStances.Entry | undefined {
      const collection = <CampaignStances.Entry[]>this.collectionCache.getCollection(CampaignStances.KEY, CampaignStances.Entry);
      return collection.find(entry => entry.key === this._stance);
    }
  }
}

export default AudioCampaignStances;
