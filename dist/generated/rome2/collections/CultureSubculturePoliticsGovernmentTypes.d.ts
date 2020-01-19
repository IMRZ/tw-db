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
        get culture(): Cultures.Entry | undefined;
        get governmentType(): PoliticsGovernmentTypes.Entry | undefined;
        get faction(): Factions.Entry | undefined;
        get effectBundle(): EffectBundles.Entry | undefined;
        get factionLeaderTrait(): TraitInfo.Entry | undefined;
        get factionLeaderTraitFemale(): TraitInfo.Entry | undefined;
    }
}
export default CultureSubculturePoliticsGovernmentTypes;
