
import { CollectionCache, CollectionKey } from "../../../common";
import { Dilemmas } from "./Dilemmas";
import { CdirEventsDilemmaChoices } from "./CdirEventsDilemmaChoices";
import { CeoSets } from "./CeoSets";

export namespace CdirEventsDilemmaChoiceDetails {
  export const KEY = new CollectionKey("cdir_events_dilemma_choice_details");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _dilemmaKey: string;
    readonly _choiceKey: string;
    readonly localisedChoiceLabel: string;
    readonly localisedChoiceTitle: string;
    readonly displayDilemmaChoiceIfCeoActive: boolean;
    readonly _requiredCeos: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._dilemmaKey = values["dilemma_key"];
      this._choiceKey = values["choice_key"];
      this.localisedChoiceLabel = values["localised_choice_label"];
      this.localisedChoiceTitle = values["localised_choice_title"];
      this.displayDilemmaChoiceIfCeoActive = !!values["display_dilemma_choice_if_ceo_active"];
      this._requiredCeos = values["required_ceos"];
    }
    
    get dilemmaKey(): Dilemmas.Entry | undefined {
      const collection = <Dilemmas.Entry[]>this.collectionCache.getCollection(Dilemmas.KEY, Dilemmas.Entry);
      return collection.find(entry => entry.key === this._dilemmaKey);
    }
    
    get choiceKey(): CdirEventsDilemmaChoices.Entry | undefined {
      const collection = <CdirEventsDilemmaChoices.Entry[]>this.collectionCache.getCollection(CdirEventsDilemmaChoices.KEY, CdirEventsDilemmaChoices.Entry);
      return collection.find(entry => entry.choiceKey === this._choiceKey);
    }
    
    get requiredCeos(): CeoSets.Entry | undefined {
      const collection = <CeoSets.Entry[]>this.collectionCache.getCollection(CeoSets.KEY, CeoSets.Entry);
      return collection.find(entry => entry.key === this._requiredCeos);
    }
  }
}

export default CdirEventsDilemmaChoiceDetails;
