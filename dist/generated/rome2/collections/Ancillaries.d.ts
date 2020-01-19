import { CollectionCache, CollectionKey } from "../../../common";
import { AncillaryInfo } from "./AncillaryInfo";
import { AncillaryTypes } from "./AncillaryTypes";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { AncillariesCategories } from "./AncillariesCategories";
import { MarriageTypes } from "./MarriageTypes";
export declare namespace Ancillaries {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly onscreenName: string;
        readonly _type: string;
        readonly appliesTo: string;
        readonly transferrable: boolean;
        readonly uniqueToWorld: boolean;
        readonly uniqueToFaction: boolean;
        readonly precedence: number;
        readonly startDate: number;
        readonly endDate: number;
        readonly effectText: string;
        readonly colourText: string;
        readonly explanationText: string;
        readonly exclusionText: string;
        readonly avatarSkill: string;
        readonly avatarSpecialAbility: string;
        readonly legendaryItem: boolean;
        readonly mpExclusive: boolean;
        readonly isWifeAncillary: boolean;
        readonly isHusbandAncillary: boolean;
        readonly isDiplomaticAncillary: boolean;
        readonly isDynasticAncillary: boolean;
        readonly _spouseSubculture: string;
        readonly _category: string;
        readonly minStartingAge: number;
        readonly maxStartingAge: number;
        readonly minExpiryAge: number;
        readonly maxExpiryAge: number;
        readonly _spouseType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get key(): AncillaryInfo.Entry | undefined;
        get type(): AncillaryTypes.Entry | undefined;
        get spouseSubculture(): CulturesSubcultures.Entry | undefined;
        get category(): AncillariesCategories.Entry | undefined;
        get spouseType(): MarriageTypes.Entry | undefined;
    }
}
export default Ancillaries;
