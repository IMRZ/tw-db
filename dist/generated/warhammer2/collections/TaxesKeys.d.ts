import { CollectionCache, CollectionKey } from "../../../common";
import { TaxesClasses } from "./TaxesClasses";
import { TaxesLevels } from "./TaxesLevels";
export declare namespace TaxesKeys {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _taxClass: string;
        readonly _taxLevel: string;
        readonly taxLookup: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly taxClass: TaxesClasses.Entry | undefined;
        readonly taxLevel: TaxesLevels.Entry | undefined;
    }
}
export default TaxesKeys;
