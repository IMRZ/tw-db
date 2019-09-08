import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { PoliticsGovernmentTypes } from "./PoliticsGovernmentTypes";
import { Factions } from "./Factions";
import { EffectBundles } from "./EffectBundles";
import { TraitInfo } from "./TraitInfo";
export declare namespace CultureSubculturePoliticsGovernmentTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _culture: string;
        readonly _governmentType: string;
        readonly _faction: string;
        readonly onScreenNameGovernmentType: string;
        readonly onScreenNameFactionLeader: string;
        readonly _effectBundle: string;
        readonly isDefault: boolean;
        readonly _factionLeaderTrait: string;
        readonly onScreenNameFactionLeaderFemale: string;
        readonly _factionLeaderTraitFemale: string;
        readonly onScreenNameGovernmentActions: string;
        readonly onScreenDescrGovernmentActions: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly culture: Cultures.Entry | undefined;
        readonly governmentType: PoliticsGovernmentTypes.Entry | undefined;
        readonly faction: Factions.Entry | undefined;
        readonly effectBundle: EffectBundles.Entry | undefined;
        readonly factionLeaderTrait: TraitInfo.Entry | undefined;
        readonly factionLeaderTraitFemale: TraitInfo.Entry | undefined;
    }
}
export default CultureSubculturePoliticsGovernmentTypes;
