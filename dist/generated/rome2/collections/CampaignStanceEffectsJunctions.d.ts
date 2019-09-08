import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignStances } from "./CampaignStances";
import { EffectBundles } from "./EffectBundles";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";
export declare namespace CampaignStanceEffectsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _stance: string;
        readonly _effectBundle: string;
        readonly _culture: string;
        readonly _subculture: string;
        readonly _faction: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly stance: CampaignStances.Entry | undefined;
        readonly effectBundle: EffectBundles.Entry | undefined;
        readonly culture: Cultures.Entry | undefined;
        readonly subculture: CulturesSubcultures.Entry | undefined;
        readonly faction: Factions.Entry | undefined;
    }
}
export default CampaignStanceEffectsJunctions;
