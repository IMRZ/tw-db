import { CollectionCache, CollectionKey } from "../../../common";
import { Units } from "./Units";
import { GovernmentTypes } from "./GovernmentTypes";
import { UnitsToGovTypeOutcomesEnum } from "./UnitsToGovTypeOutcomesEnum";
export declare namespace UnitsToGovTypeOutcomes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly _govType: string;
        readonly _outcome: string;
        constructor(collectionCache: CollectionCache, values: any);
        get key(): Units.Entry | undefined;
        get govType(): GovernmentTypes.Entry | undefined;
        get outcome(): UnitsToGovTypeOutcomesEnum.Entry | undefined;
    }
}
export default UnitsToGovTypeOutcomes;
