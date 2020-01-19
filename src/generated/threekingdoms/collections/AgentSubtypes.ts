
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioVoActors } from "./AudioVoActors";
import { MainUnits } from "./MainUnits";

export namespace AgentSubtypes {
  export const KEY = new CollectionKey("agent_subtypes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly autoGenerate: boolean;
    readonly onscreenNameOverride: string;
    readonly isCaster: boolean;
    readonly smallIcon: string;
    readonly _voiceover: string;
    readonly _associatedUnitOverride: string;
    readonly descriptionTextOverride: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.autoGenerate = !!values["auto_generate"];
      this.onscreenNameOverride = values["onscreen_name_override"];
      this.isCaster = !!values["is_caster"];
      this.smallIcon = values["small_icon"];
      this._voiceover = values["voiceover"];
      this._associatedUnitOverride = values["associated_unit_override"];
      this.descriptionTextOverride = values["description_text_override"];
    }
    
    get voiceover(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._voiceover);
    }
    
    get associatedUnitOverride(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._associatedUnitOverride);
    }
  }
}

export default AgentSubtypes;
