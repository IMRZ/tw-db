import { CollectionCache, CollectionKey } from "../../../common";
import { AudioMaterialsEnums } from "./AudioMaterialsEnums";
export declare namespace UnitArmourTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly armourValue: number;
        readonly bonusVMissiles: boolean;
        readonly weakVMissiles: boolean;
        readonly _audioMaterial: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly audioMaterial: AudioMaterialsEnums.Entry | undefined;
    }
}
export default UnitArmourTypes;
