
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterGenerationTemplates } from "./CharacterGenerationTemplates";

export namespace Advisors {
  export const KEY = new CollectionKey("advisors");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly advisorName: string;
    readonly _optionalCharacterTemplate: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.advisorName = values["advisor_name"];
      this._optionalCharacterTemplate = values["optional_character_template"];
    }
    
    get optionalCharacterTemplate(): CharacterGenerationTemplates.Entry | undefined {
      const collection = <CharacterGenerationTemplates.Entry[]>this.collectionCache.getCollection(CharacterGenerationTemplates.KEY, CharacterGenerationTemplates.Entry);
      return collection.find(entry => entry.key === this._optionalCharacterTemplate);
    }
  }
}

export default Advisors;
