
import { CollectionCache, CollectionKey } from "../../../common";
import { AncillaryInfo } from "./AncillaryInfo";
import { AncillaryTypes } from "./AncillaryTypes";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { AncillariesCategories } from "./AncillariesCategories";
import { MarriageTypes } from "./MarriageTypes";

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
      this.effectText = values["effect_text"];
      this.colourText = values["colour_text"];
      this.explanationText = values["explanation_text"];
      this.exclusionText = values["exclusion_text"];
      this.avatarSkill = values["avatar_skill"];
      this.avatarSpecialAbility = values["avatar_special_ability"];
      this.legendaryItem = !!values["legendary_item"];
      this.mpExclusive = !!values["mp_exclusive"];
      this.isWifeAncillary = !!values["is_wife_ancillary"];
      this.isHusbandAncillary = !!values["is_husband_ancillary"];
      this.isDiplomaticAncillary = !!values["is_diplomatic_ancillary"];
      this.isDynasticAncillary = !!values["is_dynastic_ancillary"];
      this._spouseSubculture = values["spouse_subculture"];
      this._category = values["category"];
      this.minStartingAge = values["min_starting_age"];
      this.maxStartingAge = values["max_starting_age"];
      this.minExpiryAge = values["min_expiry_age"];
      this.maxExpiryAge = values["max_expiry_age"];
      this._spouseType = values["spouse_type"];
    }
    
    get key(): AncillaryInfo.Entry | undefined {
      const collection = <AncillaryInfo.Entry[]>this.collectionCache.getCollection(AncillaryInfo.KEY, AncillaryInfo.Entry);
      return collection.find(entry => entry.ancillary === this._key);
    }
    
    get type(): AncillaryTypes.Entry | undefined {
      const collection = <AncillaryTypes.Entry[]>this.collectionCache.getCollection(AncillaryTypes.KEY, AncillaryTypes.Entry);
      return collection.find(entry => entry.type === this._type);
    }
    
    get spouseSubculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._spouseSubculture);
    }
    
    get category(): AncillariesCategories.Entry | undefined {
      const collection = <AncillariesCategories.Entry[]>this.collectionCache.getCollection(AncillariesCategories.KEY, AncillariesCategories.Entry);
      return collection.find(entry => entry.category === this._category);
    }
    
    get spouseType(): MarriageTypes.Entry | undefined {
      const collection = <MarriageTypes.Entry[]>this.collectionCache.getCollection(MarriageTypes.KEY, MarriageTypes.Entry);
      return collection.find(entry => entry.key === this._spouseType);
    }
  }
}

export default Ancillaries;
