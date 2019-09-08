
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { PoliticsGovernmentActions } from "./PoliticsGovernmentActions";

export namespace FactionPoliticsGovernmentActionsJunctions {
  export const KEY = new CollectionKey("faction_politics_government_actions_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly _faction: string;
    readonly _type: string;
    readonly imagePath: string;
    readonly title: string;
    readonly description: string;
    readonly cost: number;
    readonly costPerRegion: number;
    readonly cooldown: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._faction = values["faction"];
      this._type = values["type"];
      this.imagePath = values["image_path"];
      this.title = values["title"];
      this.description = values["description"];
      this.cost = values["cost"];
      this.costPerRegion = values["cost_per_region"];
      this.cooldown = values["cooldown"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get type(): PoliticsGovernmentActions.Entry | undefined {
      const collection = <PoliticsGovernmentActions.Entry[]>this.collectionCache.getCollection(PoliticsGovernmentActions.KEY, PoliticsGovernmentActions.Entry);
      return collection.find(entry => entry.key === this._type);
    }
  }
}

export default FactionPoliticsGovernmentActionsJunctions;
