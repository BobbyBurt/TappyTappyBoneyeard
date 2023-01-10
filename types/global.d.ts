export {};

declare global
{
    /** digital button states */
    // type input = 'down' | 'up' | 'just-down' | 'just-up';
        // this isn't necessary, I can put it at the top of the player class

    type playerStateName = 'running' | 'airborne' | 'groundCling' | 'cling' | 'punch' | 'dive' | 'uppercut'
}