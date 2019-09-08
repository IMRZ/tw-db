import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { Resources } from "./Resources";
export declare namespace EffectBonusValueResourceJunction {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: any;
        readonly _resource: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: Effects.Entry | undefined;
        readonly resource: Resources.Entry | undefined;
    }
}
export default EffectBonusValueResourceJunction;
