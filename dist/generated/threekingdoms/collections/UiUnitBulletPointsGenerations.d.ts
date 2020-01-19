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
        get unitClass(): UnitClass.Entry | undefined;
        get unitStat(): UiUnitStats.Entry | undefined;
        get bulletPointEnum(): UiUnitBulletPointEnums.Entry | undefined;
        get textOverride(): UiUnitBulletPointEnums.Entry | undefined;
    }
}
export default UiUnitBulletPointsGenerations;
