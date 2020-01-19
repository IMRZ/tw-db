
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioVoAideDeCampStates {
  export const KEY = new CollectionKey("audio_vo_aide_de_camp_states");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
    }
    
  }
}

export default AudioVoAideDeCampStates;
