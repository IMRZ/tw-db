import { CollectionCache, CollectionKey } from "../../../common";
import { Slots } from "./Slots";
import { Cultures } from "./Cultures";
import { WarscapeUnderlayTextures } from "./WarscapeUnderlayTextures";
import { SlotsTemplatesModels } from "./SlotsTemplatesModels";
import { WarscapeRigid } from "./WarscapeRigid";
import { WarscapeAnimated } from "./WarscapeAnimated";
export declare namespace SlotsArt {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _slot: string;
        readonly _culture: string;
        readonly _underlayTerrainTexture: string;
        readonly underlayRotation: number;
        readonly underlayScale: number;
        readonly underlayDiffersWithBuilding: boolean;
        readonly _templateModel: string;
        readonly templateDiffersAtQualityZero: boolean;
        readonly _templateModelArtQualityZero: any;
        readonly useMinibuildings: boolean;
        readonly minibuildingsDifferAtQuality: boolean;
        readonly useMinibuildingsFromQuality: number;
        readonly _emptyBuildingModel: string;
        readonly _emptyBuildingModelAnimated: string;
        readonly displayEmptyBldgFromQuality: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly slot: Slots.Entry | undefined;
        readonly culture: Cultures.Entry | undefined;
        readonly underlayTerrainTexture: WarscapeUnderlayTextures.Entry | undefined;
        readonly templateModel: SlotsTemplatesModels.Entry | undefined;
        readonly emptyBuildingModel: WarscapeRigid.Entry | undefined;
        readonly emptyBuildingModelAnimated: WarscapeAnimated.Entry | undefined;
    }
}
export default SlotsArt;
