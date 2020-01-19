
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterAssignmentConstraintSets } from "./CharacterAssignmentConstraintSets";
import { Ceos } from "./Ceos";

export namespace CharacterAssignmentConstraintSetRequiredCeos {
  export const KEY = new CollectionKey("character_assignment_constraint_set_required_ceos");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _constraintSet: string;
    readonly _ceo: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._constraintSet = values["constraint_set"];
      this._ceo = values["ceo"];
    }
    
    get constraintSet(): CharacterAssignmentConstraintSets.Entry | undefined {
      const collection = <CharacterAssignmentConstraintSets.Entry[]>this.collectionCache.getCollection(CharacterAssignmentConstraintSets.KEY, CharacterAssignmentConstraintSets.Entry);
      return collection.find(entry => entry.key === this._constraintSet);
    }
    
    get ceo(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._ceo);
    }
  }
}

export default CharacterAssignmentConstraintSetRequiredCeos;
