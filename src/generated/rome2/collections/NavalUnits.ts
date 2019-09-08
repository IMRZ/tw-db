
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitCategory } from "./UnitCategory";
import { UnitClass } from "./UnitClass";
import { UnitDescriptionShortTexts } from "./UnitDescriptionShortTexts";
import { UnitDescriptionHistoricalTexts } from "./UnitDescriptionHistoricalTexts";
import { UnitDescriptionStrengthsWeaknessesTexts } from "./UnitDescriptionStrengthsWeaknessesTexts";
import { ShipDbs } from "./ShipDbs";
import { NavalWeapons } from "./NavalWeapons";
import { UnitAttributesGroups } from "./UnitAttributesGroups";

export namespace NavalUnits {
  export const KEY = new CollectionKey("naval_units");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreenName: string;
    readonly _category: string;
    readonly _class: string;
    readonly _shortDescriptionText: string;
    readonly _historicalDescriptionText: string;
    readonly _strengthsWeaknessesText: string;
    readonly campaignActionPoints: number;
    readonly unitTypeIcon: string;
    readonly supportsFirstPerson: boolean;
    readonly _ship: string;
    readonly _primaryNavalWeapon: string;
    readonly _secondaryNavalWeapon: string;
    readonly rankDepth: number;
    readonly _attributeGroups: string;
    readonly canBoard: boolean;
    readonly canRam: boolean;
    readonly unitCard: string;
    readonly isComposite: boolean;
    readonly ignitionThreshold: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreenName = values["onscreen_name"];
      this._category = values["category"];
      this._class = values["class"];
      this._shortDescriptionText = values["short_description_text"];
      this._historicalDescriptionText = values["historical_description_text"];
      this._strengthsWeaknessesText = values["strengths_weaknesses_text"];
      this.campaignActionPoints = values["campaign_action_points"];
      this.unitTypeIcon = values["unit_type_icon"];
      this.supportsFirstPerson = !!values["supports_first_person"];
      this._ship = values["ship"];
      this._primaryNavalWeapon = values["primary_naval_weapon"];
      this._secondaryNavalWeapon = values["secondary_naval_weapon"];
      this.rankDepth = values["rank_depth"];
      this._attributeGroups = values["attribute_groups"];
      this.canBoard = !!values["can_board"];
      this.canRam = !!values["can_ram"];
      this.unitCard = values["unit_card"];
      this.isComposite = !!values["is_composite"];
      this.ignitionThreshold = values["ignition_threshold"];
    }
    
    get category(): UnitCategory.Entry | undefined {
      const collection = <UnitCategory.Entry[]>this.collectionCache.getCollection(UnitCategory.KEY, UnitCategory.Entry);
      return collection.find(entry => entry.key === this._category);
    }
    
    get class(): UnitClass.Entry | undefined {
      const collection = <UnitClass.Entry[]>this.collectionCache.getCollection(UnitClass.KEY, UnitClass.Entry);
      return collection.find(entry => entry.key === this._class);
    }
    
    get shortDescriptionText(): UnitDescriptionShortTexts.Entry | undefined {
      const collection = <UnitDescriptionShortTexts.Entry[]>this.collectionCache.getCollection(UnitDescriptionShortTexts.KEY, UnitDescriptionShortTexts.Entry);
      return collection.find(entry => entry.key === this._shortDescriptionText);
    }
    
    get historicalDescriptionText(): UnitDescriptionHistoricalTexts.Entry | undefined {
      const collection = <UnitDescriptionHistoricalTexts.Entry[]>this.collectionCache.getCollection(UnitDescriptionHistoricalTexts.KEY, UnitDescriptionHistoricalTexts.Entry);
      return collection.find(entry => entry.key === this._historicalDescriptionText);
    }
    
    get strengthsWeaknessesText(): UnitDescriptionStrengthsWeaknessesTexts.Entry | undefined {
      const collection = <UnitDescriptionStrengthsWeaknessesTexts.Entry[]>this.collectionCache.getCollection(UnitDescriptionStrengthsWeaknessesTexts.KEY, UnitDescriptionStrengthsWeaknessesTexts.Entry);
      return collection.find(entry => entry.key === this._strengthsWeaknessesText);
    }
    
    get ship(): ShipDbs.Entry | undefined {
      const collection = <ShipDbs.Entry[]>this.collectionCache.getCollection(ShipDbs.KEY, ShipDbs.Entry);
      return collection.find(entry => entry.key === this._ship);
    }
    
    get primaryNavalWeapon(): NavalWeapons.Entry | undefined {
      const collection = <NavalWeapons.Entry[]>this.collectionCache.getCollection(NavalWeapons.KEY, NavalWeapons.Entry);
      return collection.find(entry => entry.key === this._primaryNavalWeapon);
    }
    
    get secondaryNavalWeapon(): NavalWeapons.Entry | undefined {
      const collection = <NavalWeapons.Entry[]>this.collectionCache.getCollection(NavalWeapons.KEY, NavalWeapons.Entry);
      return collection.find(entry => entry.key === this._secondaryNavalWeapon);
    }
    
    get attributeGroups(): UnitAttributesGroups.Entry | undefined {
      const collection = <UnitAttributesGroups.Entry[]>this.collectionCache.getCollection(UnitAttributesGroups.KEY, UnitAttributesGroups.Entry);
      return collection.find(entry => entry.groupName === this._attributeGroups);
    }
  }
}

export default NavalUnits;
