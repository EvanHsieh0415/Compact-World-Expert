ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/create/sequenced_assembly/"
    /**
    {
     output:[Item.of()],
     input:,
     main:[

     ],
     loops:,
     id:`${id_prefix}`
    }
    */
    const { pressing, cutting, filling, deploying, sequenced_assembly} = event.recipes.create
    const recipes = [
        {
            output:[Item.of('apotheosis:salvaging_table')],
            input:'minecraft:smithing_table',
            main:[
                pressing('minecraft:smithing_table',['minecraft:smithing_table']),
                deploying('minecraft:smithing_table',['minecraft:smithing_table','apotheosis:gem_dust'])
            ],
            loops:4,
            id:`${id_prefix}salvaging_table`
        },
        {
            output:[Item.of('kubejs:andesite_alloy_sheet')],
            input:'kubejs:imperfect_andesite_alloy',
            main:[
                pressing('kubejs:imperfect_andesite_alloy',['kubejs:imperfect_andesite_alloy'])
            ],
            loops:3,
            id:`${id_prefix}andesite_alloy_sheet_from_imperfect_andesite_alloy`
        },
        {
            output:[Item.of('kubejs:spirit_press')],
            input:'malum:runewood_log',
            main:[
                pressing('malum:runewood_log',['malum:runewood_log']),
                deploying('malum:runewood_log',['malum:runewood_log','malum:infernal_spirit']),
                pressing('malum:runewood_log',['malum:runewood_log'])
            ],
            loops:1,
            id:`${id_prefix}spirit_press`
        },
        {
            output:[Item.of('minecraft:lapis_ore',2)],
            input:'minecraft:stone',
            main:[
                deploying('minecraft:stone',['minecraft:stone','malum:arcane_spirit']),
                deploying('minecraft:stone',['minecraft:stone','minecraft:blue_dye']),
                filling('minecraft:stone',[Fluid.of('kubejs:purewater',200),'minecraft:stone']),
                deploying('minecraft:stone',['minecraft:stone','thermal:apatite'])
            ],
            loops:1,
            id:`${id_prefix}lapis_ore`
        },
        {
            output:[Item.of('kubejs:blank_diamond_crystal_niotic',2)],
            input:'minecraft:diamond',
            main:[
                deploying('minecraft:diamond',['minecraft:diamond','powah:crystal_blazing']),
                pressing('minecraft:diamond',['minecraft:diamond']),
                filling('minecraft:diamond',[Fluid.of('kubejs:purewater',200),'minecraft:diamond']),
            ],
            loops:1,
            id:`${id_prefix}blank_diamond_crystal_niotic`
        },
        {
            output:[Item.of('kubejs:lens_of_blazing')],
            input:'kubejs:lens_of_blank',
            main:[
                filling('kubejs:lens_of_blank',[Fluid.of('kubejs:molten_crystal_blazing',1000),'kubejs:lens_of_blank']),
                deploying('kubejs:lens_of_blank',['kubejs:lens_of_blank','mekanism:alloy_reinforced']),
            ],
            loops:1,
            id:`${id_prefix}lens_of_blazing`
        }]

        recipes.forEach(recipe =>{
            recipe.transitionalItem = recipe.input
            sequenced_assembly(recipe.output,recipe.input,recipe.main).transitionalItem(recipe.transitionalItem).loops(recipe.loops).id(recipe.id)
        })
})