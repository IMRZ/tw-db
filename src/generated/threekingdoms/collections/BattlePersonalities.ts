
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
import { Projectiles } from "./Projectiles";
import { Variants } from "./Variants";
import { BattleEntities } from "./BattleEntities";
import { BattleEntityStats } from "./BattleEntityStats";
import { TexcExpansions } from "./TexcExpansions";

export namespace BattlePersonalities {
  export const KEY = new CollectionKey("battle_personalities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _manAnimationsTable: string;
    readonly _type: any;
    readonly _missileType: string;
    readonly _variant: string;
    readonly _battleEntity: string;
    readonly riderAttachmentPoint: string;
    readonly _battleEntityStats: string;
    readonly _gameExpansionKey: string;
    readonly isHero: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._manAnimationsTable = values["man_animations_table"];
      this._type = values["type"];
      this._missileType = values["missile_type"];
      this._variant = values["variant"];
      this._battleEntity = values["battle_entity"];
      this.riderAttachmentPoint = values["rider_attachment_point"];
      this._battleEntityStats = values["battle_entity_stats"];
      this._gameExpansionKey = values["game_expansion_key"];
      this.isHero = !!values["is_hero"];
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
    
    get battleEntity(): BattleEntities.Entry | undefined {
      const collection = <BattleEntities.Entry[]>this.collectionCache.getCollection(BattleEntities.KEY, BattleEntities.Entry);
      return collection.find(entry => entry.key === this._battleEntity);
    }
    
    get battleEntityStats(): BattleEntityStats.Entry | undefined {
      const collection = <BattleEntityStats.Entry[]>this.collectionCache.getCollection(BattleEntityStats.KEY, BattleEntityStats.Entry);
      return collection.find(entry => entry.key === this._battleEntityStats);
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
  }
}

export default BattlePersonalities;
