import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
export declare namespace MountableArtilleryUnits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unitKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly unitKey: MainUnits.Entry | undefined;
    }
}
export default MountableArtilleryUnits;
