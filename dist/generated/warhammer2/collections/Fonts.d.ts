import { CollectionCache, CollectionKey } from "../../../common";
import { FontNames } from "./FontNames";
export declare namespace Fonts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly size: number;
        readonly bold: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly key: FontNames.Entry | undefined;
    }
}
export default Fonts;
