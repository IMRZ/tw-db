
import { CollectionCache, CollectionKey } from "../../../common";
import { UiDiplomacyTreatyComponents } from "./UiDiplomacyTreatyComponents";
import { UiDiplomacyDealSignedAnimations } from "./UiDiplomacyDealSignedAnimations";

export namespace UiDiplomacyTreatyComponentsToDealSignedAnimationsJunctions {
  export const KEY = new CollectionKey("ui_diplomacy_treaty_components_to_deal_signed_animations_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _uiDiplomacyTreatyComponent: string;
    readonly _uiDiplomacyDealSignedAnimation: string;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._uiDiplomacyTreatyComponent = values["ui_diplomacy_treaty_component"];
      this._uiDiplomacyDealSignedAnimation = values["ui_diplomacy_deal_signed_animation"];
      this.priority = values["priority"];
    }
    
    get uiDiplomacyTreatyComponent(): UiDiplomacyTreatyComponents.Entry | undefined {
      const collection = <UiDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(UiDiplomacyTreatyComponents.KEY, UiDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._uiDiplomacyTreatyComponent);
    }
    
    get uiDiplomacyDealSignedAnimation(): UiDiplomacyDealSignedAnimations.Entry | undefined {
      const collection = <UiDiplomacyDealSignedAnimations.Entry[]>this.collectionCache.getCollection(UiDiplomacyDealSignedAnimations.KEY, UiDiplomacyDealSignedAnimations.Entry);
      return collection.find(entry => entry.key === this._uiDiplomacyDealSignedAnimation);
    }
  }
}

export default UiDiplomacyTreatyComponentsToDealSignedAnimationsJunctions;
