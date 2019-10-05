
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { AudioVoActorGroups } from "./AudioVoActorGroups";

export namespace AgentSubtypes {
  export const KEY = new CollectionKey("agent_subtypes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly autoGenerate: boolean;
    readonly onscreenNameOverride: string;
    readonly isCaster: boolean;
    readonly smallIcon: string;
    readonly _associatedUnitOverride: string;
    readonly descriptionTextOverride: string;
    readonly _audioVoiceoverActorGroup: string;
    readonly showInUi: boolean;
    readonly cap: number;
    readonly hasFemaleName: boolean;
    readonly canGainXp: boolean;
    readonly loyaltyIsApplicable: boolean;
    readonly contributesToAgentCap: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.autoGenerate = !!values["auto_generate"];
      this.onscreenNameOverride = values["onscreen_name_override"];
      this.isCaster = !!values["is_caster"];
      this.smallIcon = values["small_icon"];
      this._associatedUnitOverride = values["associated_unit_override"];
      this.descriptionTextOverride = values["description_text_override"];
      this._audioVoiceoverActorGroup = values["audio_voiceover_actor_group"];
      this.showInUi = !!values["show_in_ui"];
      this.cap = values["cap"];
      this.hasFemaleName = !!values["has_female_name"];
      this.canGainXp = !!values["can_gain_xp"];
      this.loyaltyIsApplicable = !!values["loyalty_is_applicable"];
      this.contributesToAgentCap = !!values["contributes_to_agent_cap"];
    }
    
    get associatedUnitOverride(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._associatedUnitOverride);
    }
    
    get audioVoiceoverActorGroup(): AudioVoActorGroups.Entry | undefined {
      const collection = <AudioVoActorGroups.Entry[]>this.collectionCache.getCollection(AudioVoActorGroups.KEY, AudioVoActorGroups.Entry);
      return collection.find(entry => entry.name === this._audioVoiceoverActorGroup);
    }
  }
}

export default AgentSubtypes;
