import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
import { Technologies } from "./Technologies";
export declare namespace MinisterialPositionRequiredTechnologyJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ministerialPositionRecord: string;
        readonly _technologyRecord: string;
        constructor(collectionCache: CollectionCache, values: any);
        get ministerialPositionRecord(): MinisterialPositions.Entry | undefined;
        get technologyRecord(): Technologies.Entry | undefined;
    }
}
export default MinisterialPositionRequiredTechnologyJunctions;
