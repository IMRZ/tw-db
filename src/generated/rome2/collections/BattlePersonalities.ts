
import { CollectionCache, CollectionKey } from "../../../common";
import { WarscapeAnimated } from "./WarscapeAnimated";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
import { Projectiles } from "./Projectiles";
import { Variants } from "./Variants";

export namespace BattlePersonalities {
  export const KEY = new CollectionKey("battle_personalities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _soldierModel: string;
    readonly _manAnimationsTable: string;
    readonly _type: any;
    readonly _missileType: string;
    readonly _variant: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._soldierModel = values["soldier_model"];
      this._manAnimationsTable = values["man_animations_table"];
      this._type = values["type"];
      this._missileType = values["missile_type"];
      this._variant = values["variant"];
    }
    
    get soldierModel(): WarscapeAnimated.Entry | undefined {
      const collection = <WarscapeAnimated.Entry[]>this.collectionCache.getCollection(WarscapeAnimated.KEY, WarscapeAnimated.Entry);
      return collection.find(entry => entry.key === this._soldierModel);
    }
    
    get manAnimationsTable(): BattleAnimationsTable.Entry | undefined {
      const collection = <BattleAnimationsTable.Entry[]>this.collectionCache.getCollection(BattleAnimationsTable.KEY, BattleAnimationsTable.Entry);
      return collection.find(entry => entry.key === this._manAnimationsTable);
    }
    
    get missileType(): Projectiles.Entry | undefined {
      const collection = <Projectiles.Entry[]>this.collectionCache.getCollection(Projectiles.KEY, Projectiles.Entry);
      return collection.find(entry => entry.key === this._missileType);
    }
    
    get variant(): Variants.Entry | undefined {
      const collection = <Variants.Entry[]>this.collectionCache.getCollection(Variants.KEY, Variants.Entry);
      return collection.find(entry => entry.variantName === this._variant);
    }
  }
}

export default BattlePersonalities;
