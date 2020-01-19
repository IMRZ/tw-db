import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
import { GovernmentTypes } from "./GovernmentTypes";
export declare namespace MinisterialPositionsToGovernmentTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ministerialPosition: string;
        readonly _governmentType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get ministerialPosition(): MinisterialPositions.Entry | undefined;
        get governmentType(): GovernmentTypes.Entry | undefined;
    }
}
export default MinisterialPositionsToGovernmentTypes;
