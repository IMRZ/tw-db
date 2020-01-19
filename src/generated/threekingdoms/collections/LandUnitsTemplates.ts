
import { CollectionCache, CollectionKey } from "../../../common";
import { LandUnits } from "./LandUnits";
import { ComposedEntities } from "./ComposedEntities";
import { PersonalityLocationEnums } from "./PersonalityLocationEnums";

export namespace LandUnitsTemplates {
  export const KEY = new CollectionKey("land_units_templates");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _landUnit: string;
    readonly _composedEntity: string;
    readonly numComposedEntities: number;
    readonly hpPool: number;
    readonly canBeDropped: boolean;
    readonly scaleNumComposedEntities: boolean;
    readonly _personalityLocation: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._landUnit = values["land_unit"];
      this._composedEntity = values["composed_entity"];
      this.numComposedEntities = values["num_composed_entities"];
      this.hpPool = values["hp_pool"];
      this.canBeDropped = !!values["can_be_dropped"];
      this.scaleNumComposedEntities = !!values["scale_num_composed_entities"];
      this._personalityLocation = values["personality_location"];
    }
    
    get landUnit(): LandUnits.Entry | undefined {
      const collection = <LandUnits.Entry[]>this.collectionCache.getCollection(LandUnits.KEY, LandUnits.Entry);
      return collection.find(entry => entry.key === this._landUnit);
    }
    
    get composedEntity(): ComposedEntities.Entry | undefined {
      const collection = <ComposedEntities.Entry[]>this.collectionCache.getCollection(ComposedEntities.KEY, ComposedEntities.Entry);
      return collection.find(entry => entry.key === this._composedEntity);
    }
    
    get personalityLocation(): PersonalityLocationEnums.Entry | undefined {
      const collection = <PersonalityLocationEnums.Entry[]>this.collectionCache.getCollection(PersonalityLocationEnums.KEY, PersonalityLocationEnums.Entry);
      return collection.find(entry => entry.key === this._personalityLocation);
    }
  }
}

export default LandUnitsTemplates;
