
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioVoCampaignSpecialAbilityStates {
  export const KEY = new CollectionKey("audio_vo_campaign_special_ability_states");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
    }
    
  }
}

export default AudioVoCampaignSpecialAbilityStates;
