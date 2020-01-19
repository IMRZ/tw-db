import { CollectionCache, CollectionKey } from "../../../common";
import { AudioMaterials } from "./AudioMaterials";
export declare namespace AudioBattleGroundTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly switch: string;
        readonly canBeSnow: boolean;
        readonly _fallback: string;
        readonly _audioMaterial: string;
        constructor(collectionCache: CollectionCache, values: any);
        get fallback(): AudioBattleGroundTypes.Entry | undefined;
        get audioMaterial(): AudioMaterials.Entry | undefined;
    }
}
export default AudioBattleGroundTypes;
