
import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityGroups } from "./SpecialAbilityGroups";

export namespace SpecialAbilityGroupParents {
  export const KEY = new CollectionKey("special_ability_group_parents");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _child: string;
    readonly _parent: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._child = values["child"];
      this._parent = values["parent"];
    }
    
    get child(): SpecialAbilityGroups.Entry | undefined {
      const collection = <SpecialAbilityGroups.Entry[]>this.collectionCache.getCollection(SpecialAbilityGroups.KEY, SpecialAbilityGroups.Entry);
      return collection.find(entry => entry.abilityGroup === this._child);
    }
    
    get parent(): SpecialAbilityGroups.Entry | undefined {
      const collection = <SpecialAbilityGroups.Entry[]>this.collectionCache.getCollection(SpecialAbilityGroups.KEY, SpecialAbilityGroups.Entry);
      return collection.find(entry => entry.abilityGroup === this._parent);
    }
  }
}

export default SpecialAbilityGroupParents;
