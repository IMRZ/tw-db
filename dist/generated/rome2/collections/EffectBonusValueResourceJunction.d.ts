import { CollectionCache, CollectionKey } from "../../../common";
import { Resources } from "./Resources";
export declare namespace EffectBonusValueResourceJunction {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: any;
        readonly _bonusValueId: any;
        readonly _resource: string;
        constructor(collectionCache: CollectionCache, values: any);
        get resource(): Resources.Entry | undefined;
    }
}
export default EffectBonusValueResourceJunction;
