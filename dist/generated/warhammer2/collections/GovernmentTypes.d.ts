import { CollectionCache, CollectionKey } from "../../../common";
import { PopulationClasses } from "./PopulationClasses";
export declare namespace GovernmentTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly governmentType: string;
        readonly onscreen: string;
        readonly electedMinisters: boolean;
        readonly hereditaryMinisters: boolean;
        readonly rank: number;
        readonly _activeUpperClass: string;
        readonly _activeLowerClass: any;
        constructor(collectionCache: CollectionCache, values: any);
        readonly activeUpperClass: PopulationClasses.Entry | undefined;
    }
}
export default GovernmentTypes;
