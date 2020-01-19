
import { CollectionCache, CollectionKey } from "../../../common";


export namespace PostAnnexationOptions {
  export const KEY = new CollectionKey("post_annexation_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly postAnnexationOption: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.postAnnexationOption = values["post_annexation_option"];
    }
    
  }
}

export default PostAnnexationOptions;
