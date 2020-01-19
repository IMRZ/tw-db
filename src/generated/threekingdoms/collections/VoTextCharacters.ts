
import { CollectionCache, CollectionKey } from "../../../common";
import { VoTexts } from "./VoTexts";
import { VoCharacters } from "./VoCharacters";

export namespace VoTextCharacters {
  export const KEY = new CollectionKey("vo_text_characters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _voText: number;
    readonly _voCharacter: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._voText = values["vo_text"];
      this._voCharacter = values["vo_character"];
    }
    
    get voText(): VoTexts.Entry | undefined {
      const collection = <VoTexts.Entry[]>this.collectionCache.getCollection(VoTexts.KEY, VoTexts.Entry);
      return collection.find(entry => entry.key === this._voText);
    }
    
    get voCharacter(): VoCharacters.Entry | undefined {
      const collection = <VoCharacters.Entry[]>this.collectionCache.getCollection(VoCharacters.KEY, VoCharacters.Entry);
      return collection.find(entry => entry.key === this._voCharacter);
    }
  }
}

export default VoTextCharacters;
