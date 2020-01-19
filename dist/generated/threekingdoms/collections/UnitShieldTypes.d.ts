import { CollectionCache, CollectionKey } from "../../../common";
import { AudioShieldTypes } from "./AudioShieldTypes";
export declare namespace UnitShieldTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly shieldDefenceValue: number;
        readonly shieldArmourValue: number;
        readonly missileBlockChance: number;
        readonly _audioType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get audioType(): AudioShieldTypes.Entry | undefined;
    }
}
export default UnitShieldTypes;
