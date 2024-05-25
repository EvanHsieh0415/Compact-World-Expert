ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/create/item_application/'
    /**
    {
     hand_item:,
     block:,
     output:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            hand_item:'create:andesite_alloy',
            block:'quark:smooth_soul_sandstone',
            output:'create:andesite_casing',
            id:`${id_prefix}andesite_casing`
        },
        {
            hand_item:'malum:infernal_spirit',
            block:'create:andesite_casing',
            output:'create:copper_casing',
            id:`${id_prefix}copper_casing_1`
        },
        {
            hand_item:'naturesaura:sky_ingot',
            block:'create:andesite_casing',
            output:'createutilities:void_casing',
            id:`${id_prefix}void_casing`
        },
        {
            hand_item:'create:copper_nugget',
            block:'malum:runewood_planks',
            output:'create:copper_casing',
            id:`${id_prefix}copper_casing_2`
        },
        {
            hand_item:'malum:eldritch_spirit',
            block:'mekanism:steel_casing',
            output:'malum:the_device',
            id:`${id_prefix}the_device`
        },
        {
            hand_item:'minecraft:bucket',
            block:'create:copper_casing',
            output:'create:fluid_tank',
            id:`${id_prefix}fluid_tank`
        },
        {
            hand_item:'kubejs:tin_spring',
            block:'create:andesite_casing',
            output:'vintageimprovements:vibrating_table',
            id:`${id_prefix}vibrating_table`
        }]

    recipes.forEach(recipe =>{
        event.recipes.create.item_application(recipe.output,[recipe.block,recipe.hand_item]).id(recipe.id)
    })
})