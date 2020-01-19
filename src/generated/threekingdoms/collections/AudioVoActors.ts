
import { CollectionCache, CollectionKey } from "../../../common";
import { TexcExpansions } from "./TexcExpansions";

export namespace AudioVoActors {
  export const KEY = new CollectionKey("audio_vo_actors");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _gameExpansionKey: string;
    readonly textKey: string;
    readonly audioFilename: string;
    readonly fullVo: boolean;
    readonly genericHeroId: string;
    readonly genericElementType: string;
    readonly _fallbackActor: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._gameExpansionKey = values["game_expansion_key"];
      this.textKey = values["text_key"];
      this.audioFilename = values["audio_filename"];
      this.fullVo = !!values["full_vo"];
      this.genericHeroId = values["generic_hero_id"];
      this.genericElementType = values["generic_element_type"];
      this._fallbackActor = values["fallback_actor"];
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
    
    get fallbackActor(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._fallbackActor);
    }
  }
}

export default AudioVoActors;
