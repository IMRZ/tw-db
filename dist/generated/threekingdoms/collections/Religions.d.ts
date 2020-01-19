import { CollectionCache, CollectionKey } from "../../../common";
import { DestructionZoneMaskTypes } from "./DestructionZoneMaskTypes";
export declare namespace Religions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly religionKey: string;
        readonly onscreen: string;
        readonly uiIconPath: string;
        readonly colRed: number;
        readonly colGreen: number;
        readonly colBlue: number;
        readonly sortOrder: number;
        readonly _destructionMaskType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get destructionMaskType(): DestructionZoneMaskTypes.Entry | undefined;
    }
}
export default Religions;
