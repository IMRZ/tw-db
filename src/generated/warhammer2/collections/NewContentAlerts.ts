
import { CollectionCache, CollectionKey } from "../../../common";


export namespace NewContentAlerts {
  export const KEY = new CollectionKey("new_content_alerts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly releaseOrder: number;
    readonly showOrder: number;
    readonly header: string;
    readonly description: string;
    readonly imagePath: string;
    readonly buttonUrl: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.releaseOrder = values["release_order"];
      this.showOrder = values["show_order"];
      this.header = values["header"];
      this.description = values["description"];
      this.imagePath = values["image_path"];
      this.buttonUrl = values["button_url"];
    }
    
  }
}

export default NewContentAlerts;
