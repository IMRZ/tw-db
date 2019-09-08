import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
export declare namespace PoliticalParties {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly nameLocalised: string;
        readonly playable: boolean;
        readonly _effectBundle: string;
        readonly descriptionLocalised: string;
        readonly initialPower: number;
        readonly campaignKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effectBundle: EffectBundles.Entry | undefined;
    }
}
export default PoliticalParties;
