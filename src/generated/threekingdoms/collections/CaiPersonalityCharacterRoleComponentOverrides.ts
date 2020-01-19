
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityCharacterRoleComponents } from "./CaiPersonalityCharacterRoleComponents";

export namespace CaiPersonalityCharacterRoleComponentOverrides {
  export const KEY = new CollectionKey("cai_personality_character_role_component_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _component: string;
    readonly _parent: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._component = values["component"];
      this._parent = values["parent"];
    }
    
    get component(): CaiPersonalityCharacterRoleComponents.Entry | undefined {
      const collection = <CaiPersonalityCharacterRoleComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityCharacterRoleComponents.KEY, CaiPersonalityCharacterRoleComponents.Entry);
      return collection.find(entry => entry.id === this._component);
    }
    
    get parent(): CaiPersonalityCharacterRoleComponents.Entry | undefined {
      const collection = <CaiPersonalityCharacterRoleComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityCharacterRoleComponents.KEY, CaiPersonalityCharacterRoleComponents.Entry);
      return collection.find(entry => entry.id === this._parent);
    }
  }
}

export default CaiPersonalityCharacterRoleComponentOverrides;
