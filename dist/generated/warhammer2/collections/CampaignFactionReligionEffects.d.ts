import { CollectionCache, CollectionKey } from "../../../common";
import { Religions } from "./Religions";
import { EffectBundles } from "./EffectBundles";
export declare namespace CampaignFactionReligionEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _religion: string;
        readonly percentageUpperThreshold: number;
        readonly _effectsBundle: string;
        constructor(collectionCache: CollectionCache, values: any);
        get religion(): Religions.Entry | undefined;
        get effectsBundle(): EffectBundles.Entry | undefined;
    }
}
export default CampaignFactionReligionEffects;
