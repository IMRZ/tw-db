
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CdirEventsDilemmaChoices {
  export const KEY = new CollectionKey("cdir_events_dilemma_choices");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly choiceKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.choiceKey = values["choice_key"];
    }
    
  }
}

export default CdirEventsDilemmaChoices;
