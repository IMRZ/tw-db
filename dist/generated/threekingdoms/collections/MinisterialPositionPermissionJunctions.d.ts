import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
import { MinisterialPositionPermissions } from "./MinisterialPositionPermissions";
export declare namespace MinisterialPositionPermissionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ministerialPosition: string;
        readonly _permission: string;
        constructor(collectionCache: CollectionCache, values: any);
        get ministerialPosition(): MinisterialPositions.Entry | undefined;
        get permission(): MinisterialPositionPermissions.Entry | undefined;
    }
}
export default MinisterialPositionPermissionJunctions;
