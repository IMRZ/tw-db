import { CollectionCache, CollectionKey } from "../../../common";
import { AudioArmourTypes } from "./AudioArmourTypes";
export declare namespace UnitArmourTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly armourValue: number;
        readonly _audioType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get audioType(): AudioArmourTypes.Entry | undefined;
    }
}
export default UnitArmourTypes;
