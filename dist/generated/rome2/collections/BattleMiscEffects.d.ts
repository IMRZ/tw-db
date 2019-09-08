import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";
export declare namespace BattleMiscEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly name: string;
        readonly _effect: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: ParticleEffects.Entry | undefined;
    }
}
export default BattleMiscEffects;
