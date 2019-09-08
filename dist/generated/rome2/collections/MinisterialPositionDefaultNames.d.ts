import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
import { GovernmentTypes } from "./GovernmentTypes";
export declare namespace MinisterialPositionDefaultNames {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ministerialPosition: string;
        readonly _govType: string;
        readonly defaultName: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly ministerialPosition: MinisterialPositions.Entry | undefined;
        readonly govType: GovernmentTypes.Entry | undefined;
    }
}
export default MinisterialPositionDefaultNames;
