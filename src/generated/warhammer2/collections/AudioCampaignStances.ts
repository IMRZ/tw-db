
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignStances } from "./CampaignStances";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";

export namespace AudioCampaignStances {
  export const KEY = new CollectionKey("audio_campaign_stances");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _stance: string;
    readonly uiSoundEvent: string;
    readonly enterEvent: string;
    readonly leaveEvent: string;
    readonly _subcultureRecord: string;
    readonly _factionRecord: string;
    readonly _overridingVoStance: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._stance = values["stance"];
      this.uiSoundEvent = values["ui_sound_event"];
      this.enterEvent = values["enter_event"];
      this.leaveEvent = values["leave_event"];
      this._subcultureRecord = values["subculture_record"];
      this._factionRecord = values["faction_record"];
      this._overridingVoStance = values["overriding_vo_stance"];
    }
    
    get stance(): CampaignStances.Entry | undefined {
      const collection = <CampaignStances.Entry[]>this.collectionCache.getCollection(CampaignStances.KEY, CampaignStances.Entry);
      return collection.find(entry => entry.key === this._stance);
    }
    
    get subcultureRecord(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subcultureRecord);
    }
    
    get factionRecord(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionRecord);
    }
    
    get overridingVoStance(): CampaignStances.Entry | undefined {
      const collection = <CampaignStances.Entry[]>this.collectionCache.getCollection(CampaignStances.KEY, CampaignStances.Entry);
      return collection.find(entry => entry.key === this._overridingVoStance);
    }
  }
}

export default AudioCampaignStances;
