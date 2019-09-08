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
        readonly key: AncillaryInfo.Entry | undefined;
        readonly type: AncillaryTypes.Entry | undefined;
        readonly spouseSubculture: CulturesSubcultures.Entry | undefined;
        readonly category: AncillariesCategories.Entry | undefined;
        readonly spouseType: MarriageTypes.Entry | undefined;
    }
}
export default Ancillaries;
