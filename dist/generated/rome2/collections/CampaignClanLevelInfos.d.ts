import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { EffectBundles } from "./EffectBundles";
export declare namespace CampaignClanLevelInfos {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly clanLevel: number;
        readonly _optionalFactionKey: string;
        readonly optionalDifficultyLevel: string;
        readonly modernisationThreshold: number;
        readonly technologyUnlockLevel: number;
        readonly _effectBundle: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly optionalFactionKey: Factions.Entry | undefined;
        readonly effectBundle: EffectBundles.Entry | undefined;
    }
}
export default CampaignClanLevelInfos;
