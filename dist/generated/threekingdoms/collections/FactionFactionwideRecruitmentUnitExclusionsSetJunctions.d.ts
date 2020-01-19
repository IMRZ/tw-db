import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { FactionwideRecruitmentUnitExclusionsSets } from "./FactionwideRecruitmentUnitExclusionsSets";
export declare namespace FactionFactionwideRecruitmentUnitExclusionsSetJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly _set: string;
        constructor(collectionCache: CollectionCache, values: any);
        get faction(): Factions.Entry | undefined;
        get set(): FactionwideRecruitmentUnitExclusionsSets.Entry | undefined;
    }
}
export default FactionFactionwideRecruitmentUnitExclusionsSetJunctions;
