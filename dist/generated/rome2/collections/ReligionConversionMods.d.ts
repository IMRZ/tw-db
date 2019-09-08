import { CollectionCache, CollectionKey } from "../../../common";
import { Religions } from "./Religions";
export declare namespace ReligionConversionMods {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _relFrom: string;
        readonly _relTo: any;
        readonly modifier: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly relFrom: Religions.Entry | undefined;
    }
}
export default ReligionConversionMods;
