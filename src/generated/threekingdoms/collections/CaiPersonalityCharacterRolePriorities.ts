
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityCharacterRoleComponents } from "./CaiPersonalityCharacterRoleComponents";
import { MinisterialPositions } from "./MinisterialPositions";
import { CaiCharacterRoles } from "./CaiCharacterRoles";

export namespace CaiPersonalityCharacterRolePriorities {
  export const KEY = new CollectionKey("cai_personality_character_role_priorities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _componentId: string;
    readonly _ministerialPositionId: string;
    readonly priority: number;
    readonly reassignmentAllowed: boolean;
    readonly assignedCharacterBias: number;
    readonly _roleType: string;
    readonly familyBias: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._componentId = values["component_id"];
      this._ministerialPositionId = values["ministerial_position_id"];
      this.priority = values["priority"];
      this.reassignmentAllowed = !!values["reassignment_allowed"];
      this.assignedCharacterBias = values["assigned_character_bias"];
      this._roleType = values["role_type"];
      this.familyBias = values["family_bias"];
    }
    
    get componentId(): CaiPersonalityCharacterRoleComponents.Entry | undefined {
      const collection = <CaiPersonalityCharacterRoleComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityCharacterRoleComponents.KEY, CaiPersonalityCharacterRoleComponents.Entry);
      return collection.find(entry => entry.id === this._componentId);
    }
    
    get ministerialPositionId(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._ministerialPositionId);
    }
    
    get roleType(): CaiCharacterRoles.Entry | undefined {
      const collection = <CaiCharacterRoles.Entry[]>this.collectionCache.getCollection(CaiCharacterRoles.KEY, CaiCharacterRoles.Entry);
      return collection.find(entry => entry.id === this._roleType);
    }
  }
}

export default CaiPersonalityCharacterRolePriorities;
