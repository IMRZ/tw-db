
import { CollectionCache, CollectionKey } from "../../../common";


export namespace DiplomaticRelationsAttitudes {
  export const KEY = new CollectionKey("diplomatic_relations_attitudes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly attitude: string;
    readonly value: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.attitude = values["attitude"];
      this.value = values["value"];
    }
    
  }
}

export default DiplomaticRelationsAttitudes;
