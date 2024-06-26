ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/mekanism/infusion_conversion/'

    /**
    {
     input:,
     output:,
     amount:,
     id:`${id_prefix}`
    }
    */

    const recipes = [
        {
            input:'kubejs:soul_steel_sheet',
            output:'kubejs:soul',
            amount:20,
            id:`${id_prefix}soul_from_soul_steel_sheet`
        },
        {
            input:'kubejs:enriched_soul_steel',
            output:'kubejs:soul',
            amount:80,
            id:`${id_prefix}soul_from_enriched_soul_steel`
        },
        {
            input:'botania:terrasteel_nugget',
            output:'kubejs:terra',
            amount:20,
            id:`${id_prefix}terra_from_terrasteel`
        },
        {
            input:'kubejs:enriched_terra',
            output:'kubejs:terra',
            amount:80,
            id:`${id_prefix}terra_from_enriched_terra`
        }]

    recipes.forEach(recipe =>{
        event.custom({
            "type":"mekanism:infusion_conversion",
            "input":{"ingredient":[{"item":recipe.input}]},
            "output":{"amount":recipe.amount,"infuse_type":recipe.output}
        }).id(recipe.id)
    })
})