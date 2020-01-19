import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignStances } from "./CampaignStances";
import { EffectBundles } from "./EffectBundles";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";
import { MilitaryForceTypes } from "./MilitaryForceTypes";
export declare namespace CampaignStanceEffectsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _stance: string;
        readonly _effectBundle: string;
        readonly _culture: string;
        readonly _subculture: string;
        readonly _faction: string;
        readonly _forceType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get stance(): CampaignStances.Entry | undefined;
        get effectBundle(): EffectBundles.Entry | undefined;
        get culture(): Cultures.Entry | undefined;
        get subculture(): CulturesSubcultures.Entry | undefined;
        get faction(): Factions.Entry | undefined;
        get forceType(): MilitaryForceTypes.Entry | undefined;
    }
}
export default CampaignStanceEffectsJunctions;
