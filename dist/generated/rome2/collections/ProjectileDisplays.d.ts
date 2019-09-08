import { CollectionCache, CollectionKey } from "../../../common";
import { WarscapeRigid } from "./WarscapeRigid";
import { ParticleEffects } from "./ParticleEffects";
import { ProjectileImpacts } from "./ProjectileImpacts";
export declare namespace ProjectileDisplays {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _displayModel: string;
        readonly _damagedDisplayModel: string;
        readonly _launchFx: string;
        readonly _trailFx: string;
        readonly _stationaryFx: string;
        readonly _impact: string;
        readonly skeleton: string;
        readonly airborneAnim: string;
        readonly landingAnim: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly displayModel: WarscapeRigid.Entry | undefined;
        readonly damagedDisplayModel: WarscapeRigid.Entry | undefined;
        readonly launchFx: ParticleEffects.Entry | undefined;
        readonly trailFx: ParticleEffects.Entry | undefined;
        readonly stationaryFx: ParticleEffects.Entry | undefined;
        readonly impact: ProjectileImpacts.Entry | undefined;
    }
}
export default ProjectileDisplays;
