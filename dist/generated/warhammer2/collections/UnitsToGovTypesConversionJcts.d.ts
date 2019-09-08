import { CollectionCache, CollectionKey } from "../../../common";
import { UnitsToGovTypePermissions } from "./UnitsToGovTypePermissions";
import { MainUnits } from "./MainUnits";
export declare namespace UnitsToGovTypesConversionJcts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: number;
        readonly _unit: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly key: UnitsToGovTypePermissions.Entry | undefined;
        readonly unit: MainUnits.Entry | undefined;
    }
}
export default UnitsToGovTypesConversionJcts;
