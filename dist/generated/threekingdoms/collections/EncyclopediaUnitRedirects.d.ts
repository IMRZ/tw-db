import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
export declare namespace EncyclopediaUnitRedirects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unit: string;
        readonly _redirectUnit: string;
        constructor(collectionCache: CollectionCache, values: any);
        get unit(): MainUnits.Entry | undefined;
        get redirectUnit(): MainUnits.Entry | undefined;
    }
}
export default EncyclopediaUnitRedirects;
