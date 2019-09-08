import { CollectionCache, CollectionKey } from "../../../common";
import { CdirMilitaryGeneratorTemplates } from "./CdirMilitaryGeneratorTemplates";
import { CdirMilitaryGeneratorUnitGroups } from "./CdirMilitaryGeneratorUnitGroups";
export declare namespace CdirMilitaryGeneratorTemplateRatios {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _templateKey: string;
        readonly _unitGroupKey: string;
        readonly ratio: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly templateKey: CdirMilitaryGeneratorTemplates.Entry | undefined;
        readonly unitGroupKey: CdirMilitaryGeneratorUnitGroups.Entry | undefined;
    }
}
export default CdirMilitaryGeneratorTemplateRatios;
