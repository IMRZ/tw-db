import { CollectionCache, CollectionKey } from "../../../common";
import { WarscapeAnimated } from "./WarscapeAnimated";
export declare namespace WarscapeAnimatedLod {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly filename: string;
        readonly range: number;
        readonly _animated: string;
        constructor(collectionCache: CollectionCache, values: any);
        get animated(): WarscapeAnimated.Entry | undefined;
    }
}
export default WarscapeAnimatedLod;
