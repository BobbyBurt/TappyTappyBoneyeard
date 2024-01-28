import LevelSelect from "~/scenes/LevelSelect";

/** */
export let levelScoreMilestones = new Map<string, Array<number>>(
[

// These are not kept up to date with the actual order of the levels, so don't get confused

    // TUTORIAL 1
    ['jump',            [ 100, 200, 300 ]],
    ['flap',            [ 100, 200, 400 ]],
    ['punch',           [ 200, 400, 700 ]],
    
    // TUTORIAL 2
    ['airborne',        [ 200, 300, 400 ]],
    ['dive',            [ 200, 400, 600 ]],
    ['dive-practice',   [ 300, 500, 1000 ]],

    // TUTORIAL 3
    ['uppercut',        [ 400, 500, 700 ]],
    ['charge',          [ 600, 900, 1300 ]],
    ['tutorial-finale', [ 800, 1200, 1800 ]],
    
    // MAIN 1
    ['bomb-intro',      [ 400, 500, 700 ]],
    ['combo',           [ 900, 1300, 2200 ]],
    ['bomb-holder',     [ 600, 800, 1100 ]],
    
    // MAIN 2
    ['umbrella-intro',  [ 600, 1200, 2400 ]],
    ['bomb-punch',      [ 600, 900, 1100 ]],
    
    // MAIN 3
    ['pogo-intro',      [ 800, 1900, 2700 ]],
    ['umbrella-shield', [ 700, 1400, 2300 ]],  // 230
    
    // HARD 1
    ['mine-intro',      [ 500, 800, 1100 ]],
    ['pogo-ideas',      [ 600, 1000, 1300 ]],
    
    // HARD 2
    ['mine-enemy',      [ 800, 1700, 2000 ]],
    ['mine-wall',       [ 1300, 1800, 2100 ]],
    
    // HARD 3
    ['gun-intro',       [ 800, 1200, 1600 ]],
    // 1400
    
    // FINALE
    ['finale',          [ 2000, 2400, 2800 ]],
    
    // OLD
    ['grenade',         [ 400, 900, 1100 ]],
    ['multi-move',      [ 400, 700, 1200 ]],
    ['bullet-ceiling',  [ 600, 700, 800 ]],
    ['pogo-challenge',  [ 800, 1600, 2100 ]],
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
        
        // HARD 1
        ['mine-intro',      [ 0, 13, 5, 0 ]],
        ['pogo-ideas',      [ 0, 13, 5, 0 ]],
        
        // HARD 2
        ['mine-enemy',      [ 0, 15, 7, 4 ]],
        ['mine-wall',       [ 0, 15, 7, 4 ]],
        
        // FINALE
        ['gun-intro',       [ 0, 20, 15, 8 ]],
        ['finale',          [ 0, 20, 15, 8 ]],
    ]);

    export let mpLevelScoreMilestones = new Map<string, Array<number>>(
        [
        
        // These are not kept up to date with the actual order of the levels, so don't get confused
        
            // TUTORIAL 1
            ['refresher',       [ 100, 200, 300 ]],
            ['stann',           [ 1000, 3000, 7800 ]],
            ['dry-madngtl',     [ 1400, 2100, 3900 ]],
            ['flipping-the-bird',[ 200, 300, 6000 ]],
            
            ['dive',            [ 200, 400, 600 ]],
            ['dive-practice',   [ 300, 500, 1000 ]],
        
            // TUTORIAL 3
            ['uppercut',        [ 400, 500, 700 ]],
            ['charge',          [ 600, 900, 1300 ]],
            ['tutorial-finale', [ 800, 1200, 1800 ]],
            
            // MAIN 1
            ['bomb-intro',      [ 400, 500, 700 ]],
            ['combo',           [ 900, 1300, 2200 ]],
            ['bomb-holder',     [ 600, 800, 1100 ]],
            
            // MAIN 2
            ['umbrella-intro',  [ 600, 1200, 2400 ]],
            ['bomb-punch',      [ 600, 900, 1100 ]],
            
            // MAIN 3
            ['pogo-intro',      [ 800, 1900, 2700 ]],
            ['umbrella-shield', [ 700, 1400, 2300 ]],  // 230
            
            // HARD 1
            ['mine-intro',      [ 500, 800, 1100 ]],
            ['pogo-ideas',      [ 600, 1000, 1300 ]],
            
            // HARD 2
            ['mine-enemy',      [ 800, 1700, 2000 ]],
            ['mine-wall',       [ 1300, 1800, 2100 ]],
            
            // HARD 3
            ['gun-intro',       [ 800, 1200, 1600 ]],
            // 1400
            
            // FINALE
            ['finale',          [ 2000, 2400, 2800 ]],
            
            // OLD
            ['grenade',         [ 400, 900, 1100 ]],
            ['multi-move',      [ 400, 700, 1200 ]],
            ['bullet-ceiling',  [ 600, 700, 800 ]],
            ['pogo-challenge',  [ 800, 1600, 2100 ]],
        ]);

/**
 * `level key` => [ '# of played', `# of bronze`, `# of silver`, `# of gold` ]
 */
export let mpLevelRequiredAwards = new Map<string, Array<number>>(
    [
        // TUTORIAL 1
        ['refresher',       [ 0, 0, 0, 0 ]],
        ['stann',           [ 0, 0, 0, 0 ]],
        ['dry-madngtl',     [ 0, 0, 0, 0 ]],
        ['flipping-the-bird',[ 3, 1, 0, 0 ]],

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
        
        // HARD 1
        ['mine-intro',      [ 0, 13, 5, 0 ]],
        ['pogo-ideas',      [ 0, 13, 5, 0 ]],
        
        // HARD 2
        ['mine-enemy',      [ 0, 15, 7, 4 ]],
        ['mine-wall',       [ 0, 15, 7, 4 ]],
        
        // FINALE
        ['gun-intro',       [ 0, 20, 15, 8 ]],
        ['finale',          [ 0, 20, 15, 8 ]],
    ]);

export function mapPackDataSwap()
{
    levelRequiredAwards = mpLevelRequiredAwards;
    levelScoreMilestones = mpLevelScoreMilestones;
}

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