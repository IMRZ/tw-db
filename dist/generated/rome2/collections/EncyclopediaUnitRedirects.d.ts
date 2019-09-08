import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
export declare namespace EncyclopediaUnitRedirects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unit: string;
        readonly _redirectUnit: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly unit: MainUnits.Entry | undefined;
        readonly redirectUnit: MainUnits.Entry | undefined;
    }
}
export default EncyclopediaUnitRedirects;
