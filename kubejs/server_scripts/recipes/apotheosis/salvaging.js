ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/apotheosis/salvaging/"
    /**
    {
     input:,
     min:,
     max:,
     output:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            input:'create:andesite_alloy',
            min:1,
            max:2,
            output:'apotheosis:gem_dust',
            id:`${id_prefix}gem_dust`
        },
        {
            input:'kubejs:gem_earth',
            min:2,
            max:4,
            output:'apotheosis:uncommon_material',
            id:`${id_prefix}uncommon_material`
        },
        {
            input:'elementalcraft:swift_alloy_ingot',
            min:2,
            max:4,
            output:'apotheosis:mythic_material',
            id:`${id_prefix}mythic_material`
        },
        {
            input:'ars_nouveau:source_gem',
            min:0,
            max:2,
            output:'apotheosis:epic_material',
            id:`${id_prefix}epic_material`
        },
        {
            input:'spirit:soul_powder',
            min:1,
            max:2,
            output:'apotheosis:rare_material',
            id:`${id_prefix}rare_material`
        },
        {
            input:'kubejs:compact_ingot',
            min:1,
            max:2,
            output:'apotheosis:common_material',
            id:`${id_prefix}common_material`
        }]

    recipes.forEach(recipe => {
        event.custom({
            "type":"apotheosis:salvaging",
            "input":{"item":recipe.input},
            "outputs":[{"min_count":recipe.min,"max_count":recipe.max,"stack":{"item":recipe.output}}]
        }).id(recipe.id)
    })
})