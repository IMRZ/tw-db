import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { Technologies } from "./Technologies";
export declare namespace UnitRequiredTechnologyJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unitKey: string;
        readonly _technologyKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get unitKey(): MainUnits.Entry | undefined;
        get technologyKey(): Technologies.Entry | undefined;
    }
}
export default UnitRequiredTechnologyJunctions;
