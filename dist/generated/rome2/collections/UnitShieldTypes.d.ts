import { CollectionCache, CollectionKey } from "../../../common";
import { AudioMaterialsEnums } from "./AudioMaterialsEnums";
export declare namespace UnitShieldTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly shieldDefenceValue: number;
        readonly shieldArmourValue: number;
        readonly _audioMaterial: string;
        readonly missileBlockChance: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly audioMaterial: AudioMaterialsEnums.Entry | undefined;
    }
}
export default UnitShieldTypes;
