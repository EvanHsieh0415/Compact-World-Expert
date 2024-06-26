ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/farmerdelight/cutting/'
    /**
    {
     output:,
     output_amount:,
     input:,
     tool:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            output:'kubejs:source_fiber',
            output_amount:2,
            input:'kubejs:source_clay_ball',
            tool:'cwe:tools/knives/psimetal',
            id:`${id_prefix}source_fiber`
        },
        {
            output:'hexerei:moon_dust',
            output_amount:16,
            input:'hexerei:mindful_trance_blend',
            tool:'cwe:tools/knives/psimetal',
            id:`${id_prefix}moon_dust`
        },
        {
            output:'minecraft:string',
            output_amount:4,
            input:'hexerei:sage',
            tool:'cwe:tools/knives/psimetal',
            id:`${id_prefix}string`
        },
        {
            output:'minecraft:leather',
            output_amount:4,
            input:'hexerei:dried_sage_bundle',
            tool:'cwe:tools/knives/psimetal',
            id:`${id_prefix}leather`
        },
        {
            output:'psi:cad_assembly_psimetal',
            output_amount:1,
            input:'psi:psimetal_block',
            tool:'cwe:tools/knives/psimetal',
            id:`${id_prefix}cad_assembly_psimetal`
        },
        {
            output:'minecraft:flint',
            output_amount:1,
            input:'minecraft:gravel',
            tool:'cwe:tools/shovel/swift_alloy',
            id:`${id_prefix}flint`
        },
        {
            output:'farmersdelight:straw',
            output_amount:2,
            input:'minecraft:grass',
            tool:'cwe:tools/knives/psimetal',
            id:`${id_prefix}straw`
        },
        {
            output:'laserio:logic_chip',
            output_amount:1,
            input:'laserio:logic_chip_raw',
            tool:'cwe:tools/knives/psimetal',
            id:`${id_prefix}logic_chip`
        },
        {
            output:'minecraft:black_dye',
            output_amount:2,
            input:'minecraft:wither_rose',
            tool:'cwe:tools/knives/psimetal',
            id:`${id_prefix}black_dye`
        }]

    recipes.forEach(recipe =>{
        event.custom({
            "type":"farmersdelight:cutting",
            "ingredients":[{"item":recipe.input}],
            "result":[{"count":recipe.output_amount,"item":recipe.output}],
            "tool":{"tag":recipe.tool}
        }).id(recipe.id)
    })
})