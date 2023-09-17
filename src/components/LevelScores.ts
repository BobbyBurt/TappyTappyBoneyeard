import LevelSelect from "~/scenes/LevelSelect";

/** */
export let levelScoreMilestones = new Map<string, Array<number>>(
[

// These are not kept up to date with the actual order of the levels, so don't get confused

    // TUTORIAL 1
    ['jump',            [ 100, 200, 300 ]],
    ['flap',            [ 100, 200, 400 ]],
    ['punch',           [ 200, 300, 400 ]],
    
    // TUTORIAL 2
    ['airborne',        [ 200, 300, 400 ]],
    ['dive',            [ 300, 400, 600 ]],
    ['dive-practice',   [ 300, 500, 1000 ]],

    // TUTORIAL 3
    ['uppercut',        [ 400, 500, 700 ]],
    ['charge',          [ 600, 900, 1300 ]],
    ['tutorial-finale', [ 800, 1200, 1800 ]],
    
    // MAIN 1
    ['bomb-intro',      [ 400, 500, 700 ]],
    ['combo',           [ 900, 1300, 2200 ]],
    ['bomb-holder',     [ 600, 900, 1100 ]],
    
    // MAIN 2
    ['umbrella-intro',  [ 600, 1200, 2400 ]],
    ['bomb-punch',      [ 600, 900, 1100 ]],
    ['umbrella-shield', [ 700, 1400, 2800 ]],
    
    // MAIN 3
    ['pogo-intro',      [ 800, 1400, 1900 ]],
    ['pogo-ideas',      [ 600, 1000, 1300 ]],
    ['pogo-challenge',  [ 800, 1600, 2100 ]],
    
    // HARD 1
    ['gun-intro',       [ 400, 600, 700 ]],
    ['bullet-ceiling',  [ 600, 700, 800 ]],
    
    // HARD 2
    ['mine-intro',      [ 500, 800, 1100 ]],
    ['mine-wall',       [ 400, 700, 900 ]],
    
    // HARD 3
    ['grenade',         [ 400, 900, 1100 ]],
    ['finale',          [ 700, 1100, 1400 ]],
    ['multi-move',       [ 400, 700, 1200 ]],

    // FINALE
]);

/**
 * `level key` => [ '# of played', `# of bronze`, `# of silver`, `# of gold` ]
 */
export let levelRequiredAwards = new Map<string, Array<number>>(
    [
        // TUTORIAL 1
        ['jump',            [ 0, 0, 0, 0 ]],
        ['flap',            [ 0, 0, 0, 0 ]],
        ['punch',           [ 0, 0, 0, 0 ]],
        
        // TUTORIAL 2
        ['airborne',        [ 3, 1, 0, 0 ]],
        ['dive',            [ 3, 1, 0, 0 ]],
        ['dive-practice',   [ 3, 1, 0, 0 ]],
    
        // TUTORIAL 3
        ['uppercut',        [ 6, 4, 0, 0 ]],
        ['charge',          [ 6, 4, 0, 0 ]],
        ['tutorial-finale', [ 6, 4, 0, 0 ]],
        
        // MAIN 1
        ['bomb-intro',      [ 9, 6, 0, 0 ]],
        ['combo',           [ 9, 6, 0, 0 ]],
        ['bomb-holder',     [ 9, 6, 0, 0 ]],
        
        // MAIN 2
        ['umbrella-intro',  [ 0, 9, 0, 0 ]],
        ['bomb-punch',      [ 0, 9, 0, 0 ]],
        
        // MAIN 3
        ['pogo-intro',      [ 0, 11, 2, 0 ]],
        ['umbrella-shield', [ 0, 11, 2, 0 ]],
        
        // MAIN 4
        ['grenade',         [ 0, 13, 4, 0 ]],
        ['pogo-ideas',      [ 0, 13, 4, 0 ]],
        
        // HARD 1
        ['mine-intro',      [ 0, 15, 6, 2 ]],
        ['pogo-challenge',  [ 0, 15, 6, 2 ]],
        // mine enemy 2
        
        // HARD 2
        ['gun-intro',       [ 0, 17, 8, 4 ]],
        ['mine-wall',       [ 0, 17, 8, 4 ]],
        ['bullet-ceiling',  [ 0, 17, 8, 4 ]],

        ['finale',          [ 0, 23, 18, 10 ]],
    ]);

// MARKED FOR DELETION
export let arcadeScoreMilestones: Array<number> = 
[
    30000, 58050, 7500, 92450, 120000, 141375
]

/**
 * 
 * @param scene 
 * @returns [ `# of played, # of bronze`, `# of silver`, `# of gold`, ]
 */
export function getTotalAwards(scene: Phaser.Scene): Array<number>
{
    let medalCount = [0, 0, 0, 0];

    LevelSelect.levelsKey.forEach((value, index) =>
    {
        let levelAward = getEarnedAward(value, scene.registry.get(`top-score: ${value}`));
        if (levelAward === 'played')
        {
            console.debug(`played ${value}`);
            medalCount[0]++;
        }
        if (levelAward === 'bronze')
        {
            console.debug(`bronze on ${value}`);
            medalCount[0]++;
            medalCount[1]++;
        }
        else if (levelAward === 'silver')
        {
            console.debug(`silver on ${value}`);
            medalCount[0]++;
            medalCount[1]++;
            medalCount[2]++;
        }
        else if (levelAward === 'gold')
        {
            console.debug(`gold on ${value}`);
            medalCount[0]++;
            medalCount[1]++;
            medalCount[2]++;
            medalCount[3]++;
        }
    });

    return medalCount;
}

export function getEarnedAward(levelKey: string, score: number): 'none' | 'played' | 'bronze' | 'silver' | 'gold'
{
    let milestones: Array<number> = levelScoreMilestones.get(levelKey)!;
    if (milestones === undefined)
    {
        console.warn(`No level score milestone data found for level key: ${levelKey}`);
        return 'none';
    }
    else if (score < milestones[0])
    {
        return 'played'
    }
    else if (score >= milestones[0]&& score < milestones[1])
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