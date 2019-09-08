
import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";

export namespace PrologueLoadingScreens {
  export const KEY = new CollectionKey("prologue_loading_screens");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly index: number;
    readonly title: string;
    readonly mainText: string;
    readonly insetImage: string;
    readonly backgroundImage: string;
    readonly paneOnLeft: boolean;
    readonly _campaign: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.index = values["index"];
      this.title = values["title"];
      this.mainText = values["main_text"];
      this.insetImage = values["inset_image"];
      this.backgroundImage = values["background_image"];
      this.paneOnLeft = !!values["pane_on_left"];
      this._campaign = values["campaign"];
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
  }
}

export default PrologueLoadingScreens;
