
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTemplateManagerTypes } from "./CeoTemplateManagerTypes";
import { CeoCategories } from "./CeoCategories";
import { CeoScriptedPermissions } from "./CeoScriptedPermissions";
import { CeoRarities } from "./CeoRarities";
import { CeoEquipmentManagerTypes } from "./CeoEquipmentManagerTypes";

export namespace Ceos {
  export const KEY = new CollectionKey("ceos");

  export class Entry {
    private readonly collectionCache: CollectionCache;

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

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._existsInLocation = values["exists_in_location"];
      this._category = values["category"];
      this.priority = values["priority"];
      this.turnsToExpire = values["turns_to_expire"];
      this.pointChangePerTurnIfInactive = values["point_change_per_turn_if_inactive"];
      this.pointChangePerTurnWhileActive = values["point_change_per_turn_while_active"];
      this._providesScriptedPermissionsOnSpawn = values["provides_scripted_permissions_on_spawn"];
      this.canBeLootedPostBattle = !!values["can_be_looted_post_battle"];
      this.inheritanceChance = values["inheritance_chance"];
      this.canBeTradedInDiplomacy = !!values["can_be_traded_in_diplomacy"];
      this.canBeStolen = !!values["can_be_stolen"];
      this._rarity = values["rarity"];
      this.canBeUnequipped = !!values["can_be_unequipped"];
      this.canBeTransferredIfEquipped = !!values["can_be_transferred_if_equipped"];
      this.cannotReequipUntilNextRoundIfUnequipped = !!values["cannot_reequip_until_next_round_if_unequipped"];
      this._equippedInLocation = values["equipped_in_location"];
    }
    
    get existsInLocation(): CeoTemplateManagerTypes.Entry | undefined {
      const collection = <CeoTemplateManagerTypes.Entry[]>this.collectionCache.getCollection(CeoTemplateManagerTypes.KEY, CeoTemplateManagerTypes.Entry);
      return collection.find(entry => entry.key === this._existsInLocation);
    }
    
    get category(): CeoCategories.Entry | undefined {
      const collection = <CeoCategories.Entry[]>this.collectionCache.getCollection(CeoCategories.KEY, CeoCategories.Entry);
      return collection.find(entry => entry.key === this._category);
    }
    
    get providesScriptedPermissionsOnSpawn(): CeoScriptedPermissions.Entry | undefined {
      const collection = <CeoScriptedPermissions.Entry[]>this.collectionCache.getCollection(CeoScriptedPermissions.KEY, CeoScriptedPermissions.Entry);
      return collection.find(entry => entry.key === this._providesScriptedPermissionsOnSpawn);
    }
    
    get rarity(): CeoRarities.Entry | undefined {
      const collection = <CeoRarities.Entry[]>this.collectionCache.getCollection(CeoRarities.KEY, CeoRarities.Entry);
      return collection.find(entry => entry.key === this._rarity);
    }
    
    get equippedInLocation(): CeoEquipmentManagerTypes.Entry | undefined {
      const collection = <CeoEquipmentManagerTypes.Entry[]>this.collectionCache.getCollection(CeoEquipmentManagerTypes.KEY, CeoEquipmentManagerTypes.Entry);
      return collection.find(entry => entry.key === this._equippedInLocation);
    }
  }
}

export default Ceos;
