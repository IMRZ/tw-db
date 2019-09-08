
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { AncillaryInfo } from "./AncillaryInfo";

export namespace StartPosCharacterAncillaries {
  export const KEY = new CollectionKey("start_pos_character_ancillaries");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _characterId: number;
    readonly _ancillary: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._characterId = values["character_id"];
      this._ancillary = values["ancillary"];
    }
    
    get characterId(): StartPosCharacters.Entry | undefined {
      const collection = <StartPosCharacters.Entry[]>this.collectionCache.getCollection(StartPosCharacters.KEY, StartPosCharacters.Entry);
      return collection.find(entry => entry.id === this._characterId);
    }
    
    get ancillary(): AncillaryInfo.Entry | undefined {
      const collection = <AncillaryInfo.Entry[]>this.collectionCache.getCollection(AncillaryInfo.KEY, AncillaryInfo.Entry);
      return collection.find(entry => entry.ancillary === this._ancillary);
    }
  }
}

export default StartPosCharacterAncillaries;
