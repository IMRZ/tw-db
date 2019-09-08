
import { CollectionCache, CollectionKey } from "../../../common";
import { MessageEvents } from "./MessageEvents";
import { EffectBundles } from "./EffectBundles";

export namespace BanditryEvents {
  export const KEY = new CollectionKey("banditry_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly _messageEvent: string;
    readonly _provinceEffectBundle: string;
    readonly minimumBanditry: number;
    readonly maximumBanditry: number;
    readonly weight: number;
    readonly duration: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this._messageEvent = values["message_event"];
      this._provinceEffectBundle = values["province_effect_bundle"];
      this.minimumBanditry = values["minimum_banditry"];
      this.maximumBanditry = values["maximum_banditry"];
      this.weight = values["weight"];
      this.duration = values["duration"];
    }
    
    get messageEvent(): MessageEvents.Entry | undefined {
      const collection = <MessageEvents.Entry[]>this.collectionCache.getCollection(MessageEvents.KEY, MessageEvents.Entry);
      return collection.find(entry => entry.event === this._messageEvent);
    }
    
    get provinceEffectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._provinceEffectBundle);
    }
  }
}

export default BanditryEvents;
