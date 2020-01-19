import { CollectionCache, CollectionKey } from "../../../common";
import { UiUnitStats } from "./UiUnitStats";
export declare namespace UnitExperienceBonuses {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _stat: string;
        readonly value: number;
        readonly growthRate: number;
        readonly growthScalar: number;
        constructor(collectionCache: CollectionCache, values: any);
        get stat(): UiUnitStats.Entry | undefined;
    }
}
export default UnitExperienceBonuses;
