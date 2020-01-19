
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AssemblyKitLocalisationTexts {
  export const KEY = new CollectionKey("assembly_kit_localisation_texts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly name: string;
    readonly sourceText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.name = values["name"];
      this.sourceText = values["source_text"];
    }
    
  }
}

export default AssemblyKitLocalisationTexts;
