
import { CollectionCache, CollectionKey } from "../../../common";
import { Religions } from "./Religions";

export namespace Agents {
  export const KEY = new CollectionKey("agents");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly movePoints: number;
    readonly lineOfSight: number;
    readonly playable: boolean;
    readonly portraitOverride: string;
    readonly _primaryAttribute: any;
    readonly _religion: string;
    readonly factionTotalCap: number;
    readonly cost: number;
    readonly inEncyclopedia: boolean;
    readonly encyclopediaUrl: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.movePoints = values["move_points"];
      this.lineOfSight = values["line_of_sight"];
      this.playable = !!values["playable"];
      this.portraitOverride = values["portrait_override"];
      this._primaryAttribute = values["primary_attribute"];
      this._religion = values["religion"];
      this.factionTotalCap = values["faction_total_cap"];
      this.cost = values["cost"];
      this.inEncyclopedia = !!values["in_encyclopedia"];
      this.encyclopediaUrl = values["encyclopedia_url"];
    }
    
    get religion(): Religions.Entry | undefined {
      const collection = <Religions.Entry[]>this.collectionCache.getCollection(Religions.KEY, Religions.Entry);
      return collection.find(entry => entry.religionKey === this._religion);
    }
  }
}

export default Agents;
