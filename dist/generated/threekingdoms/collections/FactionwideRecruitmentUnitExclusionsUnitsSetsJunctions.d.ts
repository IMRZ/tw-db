import { CollectionCache, CollectionKey } from "../../../common";
import { FactionwideRecruitmentUnitExclusionsSets } from "./FactionwideRecruitmentUnitExclusionsSets";
import { MainUnits } from "./MainUnits";
export declare namespace FactionwideRecruitmentUnitExclusionsUnitsSetsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _set: string;
        readonly _unit: string;
        constructor(collectionCache: CollectionCache, values: any);
        get set(): FactionwideRecruitmentUnitExclusionsSets.Entry | undefined;
        get unit(): MainUnits.Entry | undefined;
    }
}
export default FactionwideRecruitmentUnitExclusionsUnitsSetsJunctions;
