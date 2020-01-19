import { CollectionCache, CollectionKey } from "../../../common";
import { CdirMilitaryGeneratorUnitGroups } from "./CdirMilitaryGeneratorUnitGroups";
import { MainUnits } from "./MainUnits";
export declare namespace CdirMilitaryGeneratorUnitQualities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _groupKey: string;
        readonly _unitKey: string;
        readonly quality: number;
        readonly qualityAtMaxXp: number;
        constructor(collectionCache: CollectionCache, values: any);
        get groupKey(): CdirMilitaryGeneratorUnitGroups.Entry | undefined;
        get unitKey(): MainUnits.Entry | undefined;
    }
}
export default CdirMilitaryGeneratorUnitQualities;
