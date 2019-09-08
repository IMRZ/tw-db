import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { GovernmentTypes } from "./GovernmentTypes";
import { UnitsToGovTypeOutcomesEnum } from "./UnitsToGovTypeOutcomesEnum";
export declare namespace UnitsToGovTypePermissions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly uniqueNumber: number;
        readonly _key: string;
        readonly _govType: string;
        readonly _outcome: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly key: MainUnits.Entry | undefined;
        readonly govType: GovernmentTypes.Entry | undefined;
        readonly outcome: UnitsToGovTypeOutcomesEnum.Entry | undefined;
    }
}
export default UnitsToGovTypePermissions;
