import { CollectionCache, CollectionKey } from "../../../common";
import { UnitCategory } from "./UnitCategory";
import { UnitClass } from "./UnitClass";
import { UnitDescriptionShortTexts } from "./UnitDescriptionShortTexts";
import { UnitDescriptionHistoricalTexts } from "./UnitDescriptionHistoricalTexts";
import { UnitDescriptionStrengthsWeaknessesTexts } from "./UnitDescriptionStrengthsWeaknessesTexts";
import { ShipDbs } from "./ShipDbs";
import { NavalWeapons } from "./NavalWeapons";
import { UnitAttributesGroups } from "./UnitAttributesGroups";
export declare namespace NavalUnits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
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
        readonly unitCard: string;
        readonly isComposite: boolean;
        readonly ignitionThreshold: number;
        constructor(collectionCache: CollectionCache, values: any);
        get category(): UnitCategory.Entry | undefined;
        get class(): UnitClass.Entry | undefined;
        get shortDescriptionText(): UnitDescriptionShortTexts.Entry | undefined;
        get historicalDescriptionText(): UnitDescriptionHistoricalTexts.Entry | undefined;
        get strengthsWeaknessesText(): UnitDescriptionStrengthsWeaknessesTexts.Entry | undefined;
        get ship(): ShipDbs.Entry | undefined;
        get primaryNavalWeapon(): NavalWeapons.Entry | undefined;
        get secondaryNavalWeapon(): NavalWeapons.Entry | undefined;
        get attributeGroups(): UnitAttributesGroups.Entry | undefined;
    }
}
export default NavalUnits;
