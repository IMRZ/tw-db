import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
import { Governorships } from "./Governorships";
export declare namespace MinisterialPositionsToGovernorships {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ministerialPosition: string;
        readonly _governorship: string;
        constructor(collectionCache: CollectionCache, values: any);
        get ministerialPosition(): MinisterialPositions.Entry | undefined;
        get governorship(): Governorships.Entry | undefined;
    }
}
export default MinisterialPositionsToGovernorships;
