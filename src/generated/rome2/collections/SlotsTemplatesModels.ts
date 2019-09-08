
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SlotsTemplatesModels {
  export const KEY = new CollectionKey("slots_templates_models");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly templateName: string;
    readonly modelFilename: string;
    readonly modelFilepath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.templateName = values["template_name"];
      this.modelFilename = values["model_filename"];
      this.modelFilepath = values["model_filepath"];
    }
    
  }
}

export default SlotsTemplatesModels;
