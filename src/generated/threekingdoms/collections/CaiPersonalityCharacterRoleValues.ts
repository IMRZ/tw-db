
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityCharacterRoleComponents } from "./CaiPersonalityCharacterRoleComponents";
import { CaiCharacterRoles } from "./CaiCharacterRoles";

export namespace CaiPersonalityCharacterRoleValues {
  export const KEY = new CollectionKey("cai_personality_character_role_values");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _componentId: string;
    readonly _roleId: string;
    readonly importantCharacterValue: number;
    readonly levelMin: number;
    readonly levelMax: number;
    readonly levelValueMin: number;
    readonly levelValueMax: number;
    readonly loyaltyMin: number;
    readonly loyaltyMax: number;
    readonly loyaltyValueMin: number;
    readonly loyaltyValueMax: number;
    readonly ageMin: number;
    readonly ageMax: number;
    readonly ageValueMin: number;
    readonly ageValueMax: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._componentId = values["component_id"];
      this._roleId = values["role_id"];
      this.importantCharacterValue = values["important_character_value"];
      this.levelMin = values["level_min"];
      this.levelMax = values["level_max"];
      this.levelValueMin = values["level_value_min"];
      this.levelValueMax = values["level_value_max"];
      this.loyaltyMin = values["loyalty_min"];
      this.loyaltyMax = values["loyalty_max"];
      this.loyaltyValueMin = values["loyalty_value_min"];
      this.loyaltyValueMax = values["loyalty_value_max"];
      this.ageMin = values["age_min"];
      this.ageMax = values["age_max"];
      this.ageValueMin = values["age_value_min"];
      this.ageValueMax = values["age_value_max"];
    }
    
    get componentId(): CaiPersonalityCharacterRoleComponents.Entry | undefined {
      const collection = <CaiPersonalityCharacterRoleComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityCharacterRoleComponents.KEY, CaiPersonalityCharacterRoleComponents.Entry);
      return collection.find(entry => entry.id === this._componentId);
    }
    
    get roleId(): CaiCharacterRoles.Entry | undefined {
      const collection = <CaiCharacterRoles.Entry[]>this.collectionCache.getCollection(CaiCharacterRoles.KEY, CaiCharacterRoles.Entry);
      return collection.find(entry => entry.id === this._roleId);
    }
  }
}

export default CaiPersonalityCharacterRoleValues;
