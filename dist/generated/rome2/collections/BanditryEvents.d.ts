import { CollectionCache, CollectionKey } from "../../../common";
import { MessageEvents } from "./MessageEvents";
import { EffectBundles } from "./EffectBundles";
export declare namespace BanditryEvents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly name: string;
        readonly _messageEvent: string;
        readonly _provinceEffectBundle: string;
        readonly minimumBanditry: number;
        readonly maximumBanditry: number;
        readonly weight: number;
        readonly duration: number;
        constructor(collectionCache: CollectionCache, values: any);
        get messageEvent(): MessageEvents.Entry | undefined;
        get provinceEffectBundle(): EffectBundles.Entry | undefined;
    }
}
export default BanditryEvents;
