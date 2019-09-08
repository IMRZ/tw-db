
import { CollectionCache, CollectionKey } from "../../../common";
import { ChariotTypesEnums } from "./ChariotTypesEnums";
import { WarscapeAnimated } from "./WarscapeAnimated";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
import { WarscapeRigid } from "./WarscapeRigid";
import { BattleEntities } from "./BattleEntities";

export namespace BattlefieldChariots {
  export const KEY = new CollectionKey("battlefield_chariots");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _chariotType: string;
    readonly _model: string;
    readonly _chariotAnimationTable: string;
    readonly _destructionAnimation: string;
    readonly _destroyedModel: string;
    readonly _battleEntity: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._chariotType = values["chariot_type"];
      this._model = values["model"];
      this._chariotAnimationTable = values["chariot_animation_table"];
      this._destructionAnimation = values["destruction_animation"];
      this._destroyedModel = values["destroyed_model"];
      this._battleEntity = values["battle_entity"];
    }
    
    get chariotType(): ChariotTypesEnums.Entry | undefined {
      const collection = <ChariotTypesEnums.Entry[]>this.collectionCache.getCollection(ChariotTypesEnums.KEY, ChariotTypesEnums.Entry);
      return collection.find(entry => entry.key === this._chariotType);
    }
    
    get model(): WarscapeAnimated.Entry | undefined {
      const collection = <WarscapeAnimated.Entry[]>this.collectionCache.getCollection(WarscapeAnimated.KEY, WarscapeAnimated.Entry);
      return collection.find(entry => entry.key === this._model);
    }
    
    get chariotAnimationTable(): BattleAnimationsTable.Entry | undefined {
      const collection = <BattleAnimationsTable.Entry[]>this.collectionCache.getCollection(BattleAnimationsTable.KEY, BattleAnimationsTable.Entry);
      return collection.find(entry => entry.key === this._chariotAnimationTable);
    }
    
    get destructionAnimation(): WarscapeAnimated.Entry | undefined {
      const collection = <WarscapeAnimated.Entry[]>this.collectionCache.getCollection(WarscapeAnimated.KEY, WarscapeAnimated.Entry);
      return collection.find(entry => entry.key === this._destructionAnimation);
    }
    
    get destroyedModel(): WarscapeRigid.Entry | undefined {
      const collection = <WarscapeRigid.Entry[]>this.collectionCache.getCollection(WarscapeRigid.KEY, WarscapeRigid.Entry);
      return collection.find(entry => entry.key === this._destroyedModel);
    }
    
    get battleEntity(): BattleEntities.Entry | undefined {
      const collection = <BattleEntities.Entry[]>this.collectionCache.getCollection(BattleEntities.KEY, BattleEntities.Entry);
      return collection.find(entry => entry.key === this._battleEntity);
    }
  }
}

export default BattlefieldChariots;
