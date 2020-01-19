import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";
export declare namespace CampaignVfxDescriptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _vfx: string;
        readonly xOffset: number;
        readonly yOffset: number;
        readonly zOffset: number;
        constructor(collectionCache: CollectionCache, values: any);
        get vfx(): ParticleEffects.Entry | undefined;
    }
}
export default CampaignVfxDescriptions;
