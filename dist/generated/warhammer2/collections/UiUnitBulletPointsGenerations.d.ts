import { CollectionCache, CollectionKey } from "../../../common";
import { UnitClass } from "./UnitClass";
import { UiUnitStats } from "./UiUnitStats";
import { UiUnitBulletPointEnums } from "./UiUnitBulletPointEnums";
export declare namespace UiUnitBulletPointsGenerations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unitClass: string;
        readonly _unitStat: string;
        readonly unitStatThreshold: number;
        readonly _bulletPointEnum: string;
        readonly _textOverride: string;
        readonly shouldDisplay: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly unitClass: UnitClass.Entry | undefined;
        readonly unitStat: UiUnitStats.Entry | undefined;
        readonly bulletPointEnum: UiUnitBulletPointEnums.Entry | undefined;
        readonly textOverride: UiUnitBulletPointEnums.Entry | undefined;
    }
}
export default UiUnitBulletPointsGenerations;
