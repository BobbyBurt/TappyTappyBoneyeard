/** */
export let levelScoreMilestones = new Map<string, Array<number>>(
[
    ['jump', [ -2, -1, 0 ]],
    ['flap', [ -2, -2, 0 ]],
    ['punch', [ 500, 1000, 2000 ]],
    
    ['airborne', [ 500, 750, 1000 ]],
    ['dive', [ 1000, 1500, 2000 ]],
    ['dive-practice', [ 1500, 2500, 5000 ]],

    ['uppercut', [ 2000, 2500, 3500 ]],
    ['charge', [ 3000, 3500, 4500 ]],
    ['tutorial-finale', [ 4000, 6000, 9000 ]],
    
    ['bomb-intro', [ 1500, 2250, 3250 ]],
    ['bomb-holder', [ 3750, 5500, 7000 ]],
    ['bomb-punch', [ 3000, 4750, 6250 ]],

    ['mine-intro', [ 4000, 4500, 5500 ]],
    ['mine-wall', [ 3750, 4250, 5750 ]],
    ['gun-intro', [ 3250, 4250, 6250 ]],
    ['bullet-ceiling', [ 4000, 4500, 5250 ]],

    ['combo', [ 4000, 7250, 12000 ]],

    ['parasol', [ 2000, 2500, 3000 ]],
    ['umbrella-trap', [ 3000, 4200, 6000 ]],
    
    ['pogo-intro', [ 3500, 5000, 6500 ]],
    ['pogo-ideas', [ 4000, 9000, 14200 ]],
    ['pogo-challenge', [ 7000, 8000, 13600 ]],

    ['grenade', [ 4000, 6000, 8400 ]],

    ['finale', [ 3500, 5250, 8250 ]],
]);

// MARKED FOR DELETION
export let arcadeScoreMilestones: Array<number> = 
[
    30000, 58050, 7500, 92450, 120000, 141375
]

export function getEarnedAward(levelKey: string, score: number): 'none' | 'bronze' | 'silver' | 'gold'
{
    let milestones: Array<number> = levelScoreMilestones.get(levelKey)!;
    if (milestones === undefined)
    {
        console.warn(`No level score milestone data found for level key: ${levelKey}`);
        return 'none';
    }

    if (score >= milestones[0]&& score < milestones[1])
    {
        return 'bronze';
    }
    else if (score >= milestones[1]&& score < milestones[2])
    {
        return 'silver';
    }
    else if (score >= milestones[2])
    {
        return 'gold';
    }
    return 'none';
}

/* award text drop shadow colours:
b 10971430
s 13816530
g 16769358
*/