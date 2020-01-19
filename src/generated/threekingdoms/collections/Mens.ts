
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleEntities } from "./BattleEntities";
import { BattleAnimationsTable } from "./BattleAnimationsTable";

export namespace Mens {
  export const KEY = new CollectionKey("mens");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _battleEntity: string;
    readonly _animation: string;
    readonly _additionalAnimation: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._battleEntity = values["battle_entity"];
      this._animation = values["animation"];
      this._additionalAnimation = values["additional_animation"];
    }
    
    get battleEntity(): BattleEntities.Entry | undefined {
      const collection = <BattleEntities.Entry[]>this.collectionCache.getCollection(BattleEntities.KEY, BattleEntities.Entry);
      return collection.find(entry => entry.key === this._battleEntity);
    }
    
    get animation(): BattleAnimationsTable.Entry | undefined {
      const collection = <BattleAnimationsTable.Entry[]>this.collectionCache.getCollection(BattleAnimationsTable.KEY, BattleAnimationsTable.Entry);
      return collection.find(entry => entry.key === this._animation);
    }
    
    get additionalAnimation(): BattleAnimationsTable.Entry | undefined {
      const collection = <BattleAnimationsTable.Entry[]>this.collectionCache.getCollection(BattleAnimationsTable.KEY, BattleAnimationsTable.Entry);
      return collection.find(entry => entry.key === this._additionalAnimation);
    }
  }
}

export default Mens;
