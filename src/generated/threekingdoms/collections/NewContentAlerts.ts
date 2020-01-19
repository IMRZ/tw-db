
import { CollectionCache, CollectionKey } from "../../../common";
import { Pdlc } from "./Pdlc";

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
    readonly optionalUnpurchasedDescription: string;
    readonly _optionalDlcLink: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.releaseOrder = values["release_order"];
      this.showOrder = values["show_order"];
      this.header = values["header"];
      this.description = values["description"];
      this.imagePath = values["image_path"];
      this.buttonUrl = values["button_url"];
      this.optionalUnpurchasedDescription = values["optional_unpurchased_description"];
      this._optionalDlcLink = values["optional_dlc_link"];
    }
    
    get optionalDlcLink(): Pdlc.Entry | undefined {
      const collection = <Pdlc.Entry[]>this.collectionCache.getCollection(Pdlc.KEY, Pdlc.Entry);
      return collection.find(entry => entry.id === this._optionalDlcLink);
    }
  }
}

export default NewContentAlerts;
