
import { CollectionCache, CollectionKey } from "../../../common";
import { AncillaryInfo } from "./AncillaryInfo";
import { AncillaryTypes } from "./AncillaryTypes";
import { AncillariesCategories } from "./AncillariesCategories";
import { MainUnits } from "./MainUnits";
import { Banners } from "./Banners";
import { AncillariesSubcategories } from "./AncillariesSubcategories";

export namespace Ancillaries {
  export const KEY = new CollectionKey("ancillaries");

  export class Entry {
    private readonly collectionCache: CollectionCache;

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

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this.onscreenName = values["onscreen_name"];
      this._type = values["type"];
      this.appliesTo = values["applies_to"];
      this.transferrable = !!values["transferrable"];
      this.uniqueToWorld = !!values["unique_to_world"];
      this.uniqueToFaction = !!values["unique_to_faction"];
      this.precedence = values["precedence"];
      this.startDate = values["start_date"];
      this.endDate = values["end_date"];
      this.colourText = values["colour_text"];
      this.avatarSkill = values["avatar_skill"];
      this.avatarSpecialAbility = values["avatar_special_ability"];
      this.legendaryItem = !!values["legendary_item"];
      this.mpExclusive = !!values["mp_exclusive"];
      this.isWifeAncillary = !!values["is_wife_ancillary"];
      this._category = values["category"];
      this.minStartingAge = values["min_starting_age"];
      this.maxStartingAge = values["max_starting_age"];
      this.minExpiryAge = values["min_expiry_age"];
      this.maxExpiryAge = values["max_expiry_age"];
      this.immortal = !!values["immortal"];
      this._providedBodyguardUnit = values["provided_bodyguard_unit"];
      this._providedBanner = values["provided_banner"];
      this.uniquenessScore = values["uniqueness_score"];
      this.turnsBeforeSwapAllowed = values["turns_before_swap_allowed"];
      this._subcategory = values["subcategory"];
      this.randomlyDropped = !!values["randomly_dropped"];
    }
    
    get key(): AncillaryInfo.Entry | undefined {
      const collection = <AncillaryInfo.Entry[]>this.collectionCache.getCollection(AncillaryInfo.KEY, AncillaryInfo.Entry);
      return collection.find(entry => entry.ancillary === this._key);
    }
    
    get type(): AncillaryTypes.Entry | undefined {
      const collection = <AncillaryTypes.Entry[]>this.collectionCache.getCollection(AncillaryTypes.KEY, AncillaryTypes.Entry);
      return collection.find(entry => entry.type === this._type);
    }
    
    get category(): AncillariesCategories.Entry | undefined {
      const collection = <AncillariesCategories.Entry[]>this.collectionCache.getCollection(AncillariesCategories.KEY, AncillariesCategories.Entry);
      return collection.find(entry => entry.category === this._category);
    }
    
    get providedBodyguardUnit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._providedBodyguardUnit);
    }
    
    get providedBanner(): Banners.Entry | undefined {
      const collection = <Banners.Entry[]>this.collectionCache.getCollection(Banners.KEY, Banners.Entry);
      return collection.find(entry => entry.banner === this._providedBanner);
    }
    
    get subcategory(): AncillariesSubcategories.Entry | undefined {
      const collection = <AncillariesSubcategories.Entry[]>this.collectionCache.getCollection(AncillariesSubcategories.KEY, AncillariesSubcategories.Entry);
      return collection.find(entry => entry.subcategory === this._subcategory);
    }
  }
}

export default Ancillaries;
