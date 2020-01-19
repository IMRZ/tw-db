import { CollectionCache, CollectionKey } from "../../../common";
import { GovernmentTypes } from "./GovernmentTypes";
import { MinisterialPositions } from "./MinisterialPositions";
export declare namespace GovernmentTransitionMappings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _governmentA: string;
        readonly _governmentB: string;
        readonly _positionA: string;
        readonly _positionB: string;
        constructor(collectionCache: CollectionCache, values: any);
        get governmentA(): GovernmentTypes.Entry | undefined;
        get governmentB(): GovernmentTypes.Entry | undefined;
        get positionA(): MinisterialPositions.Entry | undefined;
        get positionB(): MinisterialPositions.Entry | undefined;
    }
}
export default GovernmentTransitionMappings;
