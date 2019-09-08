import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace PopulationClasses {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly populationClass: string;
        readonly riots: boolean;
        readonly demands: boolean;
        readonly spawnRebelGeneral: boolean;
        readonly onscreenName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default PopulationClasses;
