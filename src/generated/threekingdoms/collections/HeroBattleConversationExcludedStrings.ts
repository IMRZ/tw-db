
import { CollectionCache, CollectionKey } from "../../../common";
import { HeroBattleConversationStrings } from "./HeroBattleConversationStrings";
import { AudioVoActors } from "./AudioVoActors";

export namespace HeroBattleConversationExcludedStrings {
  export const KEY = new CollectionKey("hero_battle_conversation_excluded_strings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _heroBattleConversationString: string;
    readonly _voActor: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._heroBattleConversationString = values["hero_battle_conversation_string"];
      this._voActor = values["vo_actor"];
    }
    
    get heroBattleConversationString(): HeroBattleConversationStrings.Entry | undefined {
      const collection = <HeroBattleConversationStrings.Entry[]>this.collectionCache.getCollection(HeroBattleConversationStrings.KEY, HeroBattleConversationStrings.Entry);
      return collection.find(entry => entry.key === this._heroBattleConversationString);
    }
    
    get voActor(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._voActor);
    }
  }
}

export default HeroBattleConversationExcludedStrings;
