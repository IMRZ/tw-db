import { CollectionCache, CollectionKey } from "../../../common";
import { ProjectileIncendiaryEnum } from "./ProjectileIncendiaryEnum";
import { UnitCategory } from "./UnitCategory";
export declare namespace NavalFireJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _incendiaryLevel: string;
        readonly _unitCategory: string;
        readonly chanceOfFire: number;
        constructor(collectionCache: CollectionCache, values: any);
        get incendiaryLevel(): ProjectileIncendiaryEnum.Entry | undefined;
        get unitCategory(): UnitCategory.Entry | undefined;
    }
}
export default NavalFireJunctions;
