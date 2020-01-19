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
        get slot(): Slots.Entry | undefined;
        get culture(): Cultures.Entry | undefined;
        get underlayTerrainTexture(): WarscapeUnderlayTextures.Entry | undefined;
        get templateModel(): SlotsTemplatesModels.Entry | undefined;
        get emptyBuildingModel(): WarscapeRigid.Entry | undefined;
        get emptyBuildingModelAnimated(): WarscapeAnimated.Entry | undefined;
    }
}
export default SlotsArt;
