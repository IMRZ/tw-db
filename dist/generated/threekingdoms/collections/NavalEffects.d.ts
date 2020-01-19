import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";
export declare namespace NavalEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _effectName: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effectName(): ParticleEffects.Entry | undefined;
    }
}
export default NavalEffects;
