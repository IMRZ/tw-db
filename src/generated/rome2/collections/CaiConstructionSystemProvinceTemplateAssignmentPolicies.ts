
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemTemplates } from "./CaiConstructionSystemTemplates";

export namespace CaiConstructionSystemProvinceTemplateAssignmentPolicies {
  export const KEY = new CollectionKey("cai_construction_system_province_template_assignment_policies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _capitalProvinceTemplate: string;
    readonly _militaryProvinceTemplate: string;
    readonly _economicProvinceTemplate: string;
    readonly _militaryPortProvinceTemplate: string;
    readonly _economicPortProvinceTemplate: string;
    readonly nonPortProvinceMilitaryIdealPercentage: number;
    readonly portProvinceMilitaryIdealPercentage: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._capitalProvinceTemplate = values["capital_province_template"];
      this._militaryProvinceTemplate = values["military_province_template"];
      this._economicProvinceTemplate = values["economic_province_template"];
      this._militaryPortProvinceTemplate = values["military_port_province_template"];
      this._economicPortProvinceTemplate = values["economic_port_province_template"];
      this.nonPortProvinceMilitaryIdealPercentage = values["non_port_province_military_ideal_percentage"];
      this.portProvinceMilitaryIdealPercentage = values["port_province_military_ideal_percentage"];
    }
    
    get capitalProvinceTemplate(): CaiConstructionSystemTemplates.Entry | undefined {
      const collection = <CaiConstructionSystemTemplates.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemTemplates.KEY, CaiConstructionSystemTemplates.Entry);
      return collection.find(entry => entry.key === this._capitalProvinceTemplate);
    }
    
    get militaryProvinceTemplate(): CaiConstructionSystemTemplates.Entry | undefined {
      const collection = <CaiConstructionSystemTemplates.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemTemplates.KEY, CaiConstructionSystemTemplates.Entry);
      return collection.find(entry => entry.key === this._militaryProvinceTemplate);
    }
    
    get economicProvinceTemplate(): CaiConstructionSystemTemplates.Entry | undefined {
      const collection = <CaiConstructionSystemTemplates.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemTemplates.KEY, CaiConstructionSystemTemplates.Entry);
      return collection.find(entry => entry.key === this._economicProvinceTemplate);
    }
    
    get militaryPortProvinceTemplate(): CaiConstructionSystemTemplates.Entry | undefined {
      const collection = <CaiConstructionSystemTemplates.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemTemplates.KEY, CaiConstructionSystemTemplates.Entry);
      return collection.find(entry => entry.key === this._militaryPortProvinceTemplate);
    }
    
    get economicPortProvinceTemplate(): CaiConstructionSystemTemplates.Entry | undefined {
      const collection = <CaiConstructionSystemTemplates.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemTemplates.KEY, CaiConstructionSystemTemplates.Entry);
      return collection.find(entry => entry.key === this._economicPortProvinceTemplate);
    }
  }
}

export default CaiConstructionSystemProvinceTemplateAssignmentPolicies;
