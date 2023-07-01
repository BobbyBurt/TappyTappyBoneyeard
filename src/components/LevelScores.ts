/** */
export let levelScoreMilestones = new Map<string, Array<number>>(
[
    ['jump', [ -2, -1, 0 ]],
    ['flap', [ -2, -1, 0 ]],
    ['punch', [ 2000, 3000, 3600 ]],
    ['airborne', [ 2500, 3300, 4500 ]],
    ['dive', [ 3000, 4500, 7200 ]],
    ['gunfire', [ 2500, 2900, 3200 ]],
    ['uppercut', [ 3000, 5000, 7000 ]],
    ['charge', [ 3000, 4000, 5000 ]],
    ['combo', [ 4500, 9000, 14700 ]],
    ['tutorial-finale', [ 0, 0, 0 ]],
    
    ['bomb-intro', [ 3000, 4500, 6300 ]],
    ['bomb-holder', [ 4500, 5000, 8700 ]],
    ['bomb-punch', [ 2800, 5000, 6500 ]],
    ['bomb-uppercut', [ 2750, 4000, 5600 ]],

    ['bullet-ceiling', [ 0, 0, 5500 ]],

    ['parasol', [ 0, 0, 0 ]],

    ['pogo-intro', [ 3500, 5000, 6500 ]],
    ['pogo-ideas', [ 5000, 9000, 14200 ]],
    ['pogo-challenge', [ 7000, 8000, 13600 ]],
]);

/* award text drop shadow colours:
b 10971430
s 13816530
g 16769358
*/