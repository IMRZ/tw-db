import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { UiUnitBulletPointEnums } from "./UiUnitBulletPointEnums";
export declare namespace UiUnitBulletPointUnitOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unitKey: string;
        readonly _bulletPoint: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly unitKey: MainUnits.Entry | undefined;
        readonly bulletPoint: UiUnitBulletPointEnums.Entry | undefined;
    }
}
export default UiUnitBulletPointUnitOverrides;
