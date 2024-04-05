ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/ae2/inscriber/"
    /**
    {
     top:,
     middle:,
     bottom:,
     mode:,
     output:,
     output_amount:,
     id:`${id_prefix}`
    }
    //mode(1:"press" or 2:"inscribe")
    */
    const reicpes = [
        {
            top:'elementalcraft:swift_alloy_block',
            middle:'botania:livingrock',
            bottom:'ae2:fluix_block',
            mode:1,
            output:'kubejs:rune_press',
            output_amount:1,
            id:`${id_prefix}rune_press`
        },
        {
            top:'kubejs:rune_press',
            middle:'botania:livingrock',
            bottom:false,
            mode:2,
            output:'kubejs:rune_blank',
            output_amount:2,
            id:`${id_prefix}rune_blank`
        },
        {
            top:'apotheosis:uncommon_material',
            middle:'kubejs:rune_blank',
            bottom:'kubejs:sky_nugget',
            mode:1,
            output:'botania:rune_earth',
            output_amount:1,
            id:`${id_prefix}rune_earth`
        },
        {
            top:'botania:rune_earth',
            middle:'naturesaura:sky_ingot_block',
            bottom:'botania:mana_powder',
            mode:1,
            output:'mythicbotany:central_rune_holder',
            output_amount:1,
            id:`${id_prefix}central_rune_holder`
        },
        {
            top:'botania:rune_earth',
            middle:'elementalcraft:swift_alloy_block',
            bottom:'botania:mana_powder',
            mode:1,
            output:'mythicbotany:rune_holder',
            output_amount:8,
            id:`${id_prefix}rune_holder`
        },
        {
            top:'ae2:calculation_processor_press',
            middle:'kubejs:gaia_nugget',
            bottom:false,
            mode:2,
            output:'ae2:calculation_processor_press',
            output_amount:1,
            id:`${id_prefix}calculation_processor_press`
        },
        {
            top:'ae2:engineering_processor_press',
            middle:'kubejs:gaia_nugget',
            bottom:false,
            mode:2,
            output:'ae2:engineering_processor_press',
            output_amount:1,
            id:`${id_prefix}engineering_processor_press`
        },
        {
            top:'ae2:silicon_press',
            middle:'kubejs:gaia_nugget',
            bottom:false,
            mode:2,
            output:'ae2:silicon_press',
            output_amount:1,
            id:`${id_prefix}silicon_press`
        },
        {
            top:'ae2:logic_processor_press',
            middle:'kubejs:gaia_nugget',
            bottom:false,
            mode:2,
            output:'ae2:logic_processor_press',
            output_amount:1,
            id:`${id_prefix}logic_processor_press`
        }]

    reicpes.forEach(recipe =>{
        recipe.mode = (recipe.mode == 1) ? "press" : "inscribe"
        event.custom({
            "type":"ae2:inscriber",
            "ingredients":(recipe.bottom == false)?{"middle":{"item":recipe.middle},"top":{"item":recipe.top}}:{"bottom":{"item":recipe.bottom},"middle":{"item":recipe.middle},"top":{"item":recipe.top}},
            "mode":recipe.mode,
            "result":{"item":recipe.output,"count":recipe.output_amount}
        }).id(recipe.id)
    })
})