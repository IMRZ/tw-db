import { CollectionCache, CollectionKey } from "../../../common";
import { ModifiableUnitStats } from "./ModifiableUnitStats";
export declare namespace UnitExperienceBonuses {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _stat: string;
        readonly value: number;
        readonly growthRate: number;
        readonly growthScalar: number;
        constructor(collectionCache: CollectionCache, values: any);
        get stat(): ModifiableUnitStats.Entry | undefined;
    }
}
export default UnitExperienceBonuses;
