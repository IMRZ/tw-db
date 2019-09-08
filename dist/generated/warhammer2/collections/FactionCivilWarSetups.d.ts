import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { EffectBundles } from "./EffectBundles";
export declare namespace FactionCivilWarSetups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _primaryFaction: string;
        readonly _secondaryFaction: string;
        readonly _effectBundle: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly primaryFaction: Factions.Entry | undefined;
        readonly secondaryFaction: Factions.Entry | undefined;
        readonly effectBundle: EffectBundles.Entry | undefined;
    }
}
export default FactionCivilWarSetups;
