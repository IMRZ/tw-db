
import { CollectionCache, CollectionKey } from "../../../common";
import { LandUnits } from "./LandUnits";
import { DeployablesAbilities } from "./DeployablesAbilities";

export namespace LandUnitsToDeployablesAbilitiesJunctions {
  export const KEY = new CollectionKey("land_units_to_deployables_abilities_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _landUnit: string;
    readonly _deployableAbility: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._landUnit = values["land_unit"];
      this._deployableAbility = values["deployable_ability"];
    }
    
    get landUnit(): LandUnits.Entry | undefined {
      const collection = <LandUnits.Entry[]>this.collectionCache.getCollection(LandUnits.KEY, LandUnits.Entry);
      return collection.find(entry => entry.key === this._landUnit);
    }
    
    get deployableAbility(): DeployablesAbilities.Entry | undefined {
      const collection = <DeployablesAbilities.Entry[]>this.collectionCache.getCollection(DeployablesAbilities.KEY, DeployablesAbilities.Entry);
      return collection.find(entry => entry.abilityKey === this._deployableAbility);
    }
  }
}

export default LandUnitsToDeployablesAbilitiesJunctions;
