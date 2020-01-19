import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTemplateManagerTypes } from "./CeoTemplateManagerTypes";
import { CeoCategories } from "./CeoCategories";
import { CeoScriptedPermissions } from "./CeoScriptedPermissions";
import { CeoRarities } from "./CeoRarities";
import { CeoEquipmentManagerTypes } from "./CeoEquipmentManagerTypes";
export declare namespace Ceos {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _existsInLocation: string;
        readonly _category: string;
        readonly priority: number;
        readonly turnsToExpire: number;
        readonly pointChangePerTurnIfInactive: number;
        readonly pointChangePerTurnWhileActive: number;
        readonly _providesScriptedPermissionsOnSpawn: string;
        readonly canBeLootedPostBattle: boolean;
        readonly inheritanceChance: number;
        readonly canBeTradedInDiplomacy: boolean;
        readonly canBeStolen: boolean;
        readonly _rarity: string;
        readonly canBeUnequipped: boolean;
        readonly canBeTransferredIfEquipped: boolean;
        readonly cannotReequipUntilNextRoundIfUnequipped: boolean;
        readonly _equippedInLocation: string;
        constructor(collectionCache: CollectionCache, values: any);
        get existsInLocation(): CeoTemplateManagerTypes.Entry | undefined;
        get category(): CeoCategories.Entry | undefined;
        get providesScriptedPermissionsOnSpawn(): CeoScriptedPermissions.Entry | undefined;
        get rarity(): CeoRarities.Entry | undefined;
        get equippedInLocation(): CeoEquipmentManagerTypes.Entry | undefined;
    }
}
export default Ceos;
