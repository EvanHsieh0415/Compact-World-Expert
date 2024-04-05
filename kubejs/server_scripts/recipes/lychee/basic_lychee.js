ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/lychee/basic_lychee/'
    /**
    {
     main:lychee(,,,
          posts(,)),
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            main:lychee('lychee:block_interacting','kubejs:highly_rough_psimetal','compactmachines:wall',
                 posts('place','ars_nouveau:imbuement_chamber')),
            id:`${id_prefix}imbuement_chamber`
        },
        {
            main:lychee('lychee:block_interacting','kubejs:compact_dust','compactmachines:wall',
                 posts('drop_item','kubejs:compact_ingot',1,"execute","fill ~ ~ ~ ~ ~ ~ minecraft:air replace compactmachines:wall")),
            id:`${id_prefix}compact_ingot_by_consum_block`
        },
        {
            main:lychee('lychee:block_interacting','kubejs:cad_assembly_compact','compactmachines:solid_wall',
                 posts('drop_item','psi:cad_assembly_iron')),
            id:`${id_prefix}cad_assembly_iron`
        },
        {
            main:lychee('lychee:block_interacting','kubejs:water_droplet','minecraft:dirt',
                 posts('place','minecraft:water')),
            id:`${id_prefix}water_from_water_droplet`
        },
        {
            main:lychee('lychee:block_interacting','kubejs:source_dust','kubejs:compact_block',
                 posts('drop_item','kubejs:source_clay_ball')),
            id:`${id_prefix}source_clay_ball`
        },
        {
            main:lychee('lychee:block_interacting','naturesaura:gold_fiber','minecraft:stripped_oak_log',
                 posts('place','naturesaura:wood_stand')),
            id:`${id_prefix}wood_stand`
        },
        {
            main:lychee('lychee:block_interacting','naturesaura:gold_fiber','minecraft:grass_block',
                 posts('drop_item','minecraft:oak_sapling',1,"execute","fill ~ ~ ~ ~ ~ ~ minecraft:air replace minecraft:grass_block")),
            id:`${id_prefix}oak_sapling_by_consum_block`
        },
        {
            main:lychee('lychee:block_interacting','hexerei:pestle_and_mortar','botania:manasteel_block',
                 posts('drop_item','cwe:mana_crush_machine',1,"execute","fill ~ ~ ~ ~ ~ ~ minecraft:air replace botania:manasteel_block")),
            id:`${id_prefix}mana_crush_machine`
        },
        ,
        {
            main:lychee("lychee:item_exploding",'kubejs:rough_psimetal',false,
                 posts("drop_item","psi:psimetal",1,"chance",0.7),
                 posts("drop_item","kubejs:compact_nugget",2,"chance",0.3)),
            id:`${id_prefix}psimetal`
        },
        {
            main:lychee('lychee:item_inside','kubejs:source_clay_ball','minecraft:water',
                 posts('drop_item','minecraft:clay_ball',1,"chance",0.2)),
            id:`${id_prefix}clay_ball`
        },
        {
            main:lychee('lychee:item_inside','kubejs:source_dust','minecraft:water',
                 posts('drop_item','minecraft:bone_meal',1,"chance",0.6)),
            id:`${id_prefix}bone_meal`
        },
        {
            main:lychee('lychee:item_inside',"kubejs:highly_rough_psimetal","minecraft:water",
                 posts("drop_item","kubejs:rough_psimetal",1,"chance",0.6),
                 posts("drop_item","kubejs:compact_nugget",4,"chance",0.4)),
            id:`${id_prefix}rough_psimetal`
        },
        {
            main:lychee('lychee:item_inside','minecraft:sand','minecraft:water',
                 posts("drop_item",'minecraft:kelp',1,"chance",0.6),
                 posts("drop_item",'minecraft:bone_meal',1,"chance",0.4)),
            id:`${id_prefix}kelp_bone_meal`
        },
        {
            main:lychee('lychee:block_interacting',"botania:twig_wand","minecraft:andesite",
                 posts('place',"minecraft:polished_andesite"),false,false,false,true),
            id:`${id_prefix}polished_andesite`
        },
        {
            main:lychee('lychee:block_interacting',"kubejs:swift_alloy_key","kubejs:compact_keywall",
                 posts('place',"minecraft:air",false,"execute","fill ~ ~ ~ ~ ~ ~ minecraft:air replace compactmachines:solid_wall")),
            id:`${id_prefix}break_the_compact_keywall`
        },
        {
            main:lychee('lychee:block_interacting','kubejs:bottle_water','minecraft:grass',
                 posts('place','minecraft:poppy')),
            id:`${id_prefix}poppy`
        },
        {
            main:lychee('lychee:block_interacting','naturesaura:gold_fiber','minecraft:stone_bricks',
                 posts('place','naturesaura:gold_brick')),
            id:`${id_prefix}gold_brick`
        },
        {
            main:lychee('lychee:block_interacting','apotheosis:mythic_material','create_compressed:cogwheel_block',
                 posts('drop_item','create:large_cogwheel',9,"execute","fill ~ ~ ~ ~ ~ ~ minecraft:air replace create_compressed:cogwheel_block")),
            id:`${id_prefix}large_cogwheel`
        },
        {
            main:lychee('lychee:block_interacting','ae2:quartz_glass','create:display_board',
                 posts('drop_item','ae2:semi_dark_monitor',1,"execute","fill ~ ~ ~ ~ ~ ~ minecraft:air replace create:display_board")),
            id:`${id_prefix}semi_dark_monitor`
        },
        {
            main:lychee('lychee:block_interacting','ae2:fluix_block','create:andesite_casing',
                 posts('place','ae2:inscriber')),
            id:`${id_prefix}inscriber`
        },
        {
            main:lychee('lychee:block_interacting','botania:rune_earth','spirit:soul_steel_block',
                 posts('drop_item','modularrouters:modular_router',4,'execute',"fill ~ ~ ~ ~ ~ ~ minecraft:air replace create:andesite_casing")),
            id:`${id_prefix}modularrouters`
        },
        {
            main:lychee('lychee:block_interacting','create:piston_extension_pole','create:andesite_casing',
                 posts('place','minecraft:piston')),
            id:`${id_prefix}piston`
        },
        {
            main:lychee('lychee:block_interacting','naturesaura:token_euphoria','naturesaura:gold_brick',
                 posts('place','kubejs:token_euphoria_catalyst')),
            id:`${id_prefix}token_euphoria_catalyst`
        },
        {
            main:lychee('lychee:block_interacting','ars_nouveau:archwood_slab','create_crystal_clear:andesite_glass_casing',
                 posts('place','ars_nouveau:mob_jar')),
            id:`${id_prefix}mob_jar`
        },
        {
            main:lychee('lychee:block_interacting','botania:terrasteel_ingot','botania:mana_pylon',
                 posts('place','botania:natura_pylon')),
            id:`${id_prefix}natura_pylon`
        }]

    recipes.forEach(recipe =>{
        event.custom(recipe.main).id(recipe.id)
    })
})