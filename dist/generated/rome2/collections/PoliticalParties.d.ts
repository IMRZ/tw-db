import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
import { PoliticalTraits } from "./PoliticalTraits";
export declare namespace PoliticalParties {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly nameLocalised: string;
        readonly playable: boolean;
        readonly associatedSurname: string;
        readonly uiIcon: string;
        readonly _effectBundle: string;
        readonly descriptionLocalised: string;
        readonly initialPower: number;
        readonly r: number;
        readonly g: number;
        readonly b: number;
        readonly _trait1: string;
        readonly _trait2: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effectBundle(): EffectBundles.Entry | undefined;
        get trait1(): PoliticalTraits.Entry | undefined;
        get trait2(): PoliticalTraits.Entry | undefined;
    }
}
export default PoliticalParties;
