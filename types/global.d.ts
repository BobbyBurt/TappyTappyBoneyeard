export {};

declare global
{
    /** digital button states */
    // type input = 'down' | 'up' | 'just-down' | 'just-up';
        // this isn't necessary, I can put it at the top of the player class

    type playerStateName = 'running' | 'airborne' | 'groundCling' | 'cling' | 'punch' | 'dive' | 'uppercut' | 'inPlane'

    type GunDirection = null | 'up' | 'upward' | 'forward' | 'downward' | 'down';

    type EnemyHitCause = undefined | 'dive' | 'punch' | 'uppercut' | 'explosion' | 'chain';

    type inputMode = 'keyboard' | 'gamepad' | 'touch';

    var __DEV__: boolean;
}