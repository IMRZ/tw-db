import { CollectionCache, CollectionKey } from "../../../common";
import { AncillaryInfo } from "./AncillaryInfo";
import { AncillaryTypes } from "./AncillaryTypes";
import { AncillariesCategories } from "./AncillariesCategories";
import { MainUnits } from "./MainUnits";
import { Banners } from "./Banners";
import { AncillariesSubcategories } from "./AncillariesSubcategories";
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
        readonly colourText: string;
        readonly avatarSkill: string;
        readonly avatarSpecialAbility: string;
        readonly legendaryItem: boolean;
        readonly mpExclusive: boolean;
        readonly isWifeAncillary: boolean;
        readonly _category: string;
        readonly minStartingAge: number;
        readonly maxStartingAge: number;
        readonly minExpiryAge: number;
        readonly maxExpiryAge: number;
        readonly immortal: boolean;
        readonly _providedBodyguardUnit: string;
        readonly _providedBanner: string;
        readonly uniquenessScore: number;
        readonly turnsBeforeSwapAllowed: number;
        readonly _subcategory: string;
        readonly randomlyDropped: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly key: AncillaryInfo.Entry | undefined;
        readonly type: AncillaryTypes.Entry | undefined;
        readonly category: AncillariesCategories.Entry | undefined;
        readonly providedBodyguardUnit: MainUnits.Entry | undefined;
        readonly providedBanner: Banners.Entry | undefined;
        readonly subcategory: AncillariesSubcategories.Entry | undefined;
    }
}
export default Ancillaries;
