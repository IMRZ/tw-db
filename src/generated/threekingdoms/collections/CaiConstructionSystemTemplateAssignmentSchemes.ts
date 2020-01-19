
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemTemplates } from "./CaiConstructionSystemTemplates";

export namespace CaiConstructionSystemTemplateAssignmentSchemes {
  export const KEY = new CollectionKey("cai_construction_system_template_assignment_schemes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly schemeKey: string;
    readonly _capitalTemplate: string;
    readonly _basicMilitaryTemplate: string;
    readonly _basicEconomicTemplate: string;
    readonly basicIdealMilitaryTemplatePercentage: number;
    readonly _navalMilitaryTemplate: string;
    readonly _navalEconomicTemplate: string;
    readonly navalIdealMilitaryTemplatePercentage: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.schemeKey = values["scheme_key"];
      this._capitalTemplate = values["capital_template"];
      this._basicMilitaryTemplate = values["basic_military_template"];
      this._basicEconomicTemplate = values["basic_economic_template"];
      this.basicIdealMilitaryTemplatePercentage = values["basic_ideal_military_template_percentage"];
      this._navalMilitaryTemplate = values["naval_military_template"];
      this._navalEconomicTemplate = values["naval_economic_template"];
      this.navalIdealMilitaryTemplatePercentage = values["naval_ideal_military_template_percentage"];
    }
    
    get capitalTemplate(): CaiConstructionSystemTemplates.Entry | undefined {
      const collection = <CaiConstructionSystemTemplates.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemTemplates.KEY, CaiConstructionSystemTemplates.Entry);
      return collection.find(entry => entry.key === this._capitalTemplate);
    }
    
    get basicMilitaryTemplate(): CaiConstructionSystemTemplates.Entry | undefined {
      const collection = <CaiConstructionSystemTemplates.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemTemplates.KEY, CaiConstructionSystemTemplates.Entry);
      return collection.find(entry => entry.key === this._basicMilitaryTemplate);
    }
    
    get basicEconomicTemplate(): CaiConstructionSystemTemplates.Entry | undefined {
      const collection = <CaiConstructionSystemTemplates.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemTemplates.KEY, CaiConstructionSystemTemplates.Entry);
      return collection.find(entry => entry.key === this._basicEconomicTemplate);
    }
    
    get navalMilitaryTemplate(): CaiConstructionSystemTemplates.Entry | undefined {
      const collection = <CaiConstructionSystemTemplates.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemTemplates.KEY, CaiConstructionSystemTemplates.Entry);
      return collection.find(entry => entry.key === this._navalMilitaryTemplate);
    }
    
    get navalEconomicTemplate(): CaiConstructionSystemTemplates.Entry | undefined {
      const collection = <CaiConstructionSystemTemplates.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemTemplates.KEY, CaiConstructionSystemTemplates.Entry);
      return collection.find(entry => entry.key === this._navalEconomicTemplate);
    }
  }
}

export default CaiConstructionSystemTemplateAssignmentSchemes;
