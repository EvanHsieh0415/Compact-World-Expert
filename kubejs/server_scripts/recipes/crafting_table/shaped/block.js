ServerEvents.recipes(event => {
  const id_prefix = 'compact_world:recipes/crafting_table/shaped/block/'
  /**
  {
   output:,
   pattern:['','',''],
   key:{

   },
   id:`${id_prefix}`
  }
  */
  const recipes = [
    {
      output:'compactmachines:wall',
      pattern:['AA ','AA ','   '],
      key:{
        A: 'kubejs:compact_dust'
      },
      id:`${id_prefix}wall`
    },
    {
      output:'psi:cad_assembler',
      pattern:['A  ','B  ','   '],
      key:{
        A: 'kubejs:compact_ingot',
        B: 'compactmachines:wall'
      },
      id:`${id_prefix}cad_assembly`
    },
    {
      output:'cyclic:workbench',
      pattern:['AA ','AA ','   '],
      key:{
        A: 'compactmachines:wall'
      },
      id:`${id_prefix}workbench`
     },
     {
      output:'ars_nouveau:source_gem_block',
      pattern:['AAA','AAA','AAA'],
      key:{
        A: 'ars_nouveau:source_gem'
      },
      id:`${id_prefix}source_gem_block_2`
     },
     {
      output:'kubejs:compact_block',
      pattern:['AAA','AAA','AAA'],
      key:{
        A: 'kubejs:compact_ingot'
      },
      id:`${id_prefix}compact_block`
     },
     {
      output:'minecraft:furnace',
      pattern:['AAA','A A','AAA'],
      key:{
        A: 'compactmachines:wall'
      },
      id:`${id_prefix}furnace`
     },
     {
      output:'botania:floating_pure_daisy',
      pattern:[' A ',' B ',' C '],
      key:{
        A: 'minecraft:wheat_seeds',
        B: 'kubejs:source_psicoal',
        C: 'minecraft:grass_block'
      },
      id:`${id_prefix}floating_pure_daisy`
     },
     {
      output:'minecraft:chest',
      pattern:['AAA','A A','AAA'],
      key:{
        A: 'botania:livingwood_planks'
      },
      id:`${id_prefix}chest_from_planks`
     },
     {
      output:'4x minecraft:chest',
      pattern:['AAA','A A','AAA'],
      key:{
        A: '#botania:livingwood_logs'
      },
      id:`${id_prefix}chest_from_logs`
     },
     {
      output:'minecraft:barrel',
      pattern:['ABA','A A','ABA'],
      key:{
        A: 'botania:livingwood_planks',
        B: 'botania:livingwood_planks_slab'
      },
      id:`${id_prefix}barrel`
     },
     {
      output:'minecraft:campfire',
      pattern:[' A ','ABA','CCC'],
      key:{
        A: '#forge:rods',
        B: 'kubejs:source_psicoal',
        C: 'botania:livingwood_log'
      },
      id:`${id_prefix}campfire`
     },
     {
      output:'hexerei:pestle_and_mortar',
      pattern:['   ','ABA',' A '],
      key:{
        A: 'compactmachines:wall',
        B: 'minecraft:gold_nugget'
      },
      id:`${id_prefix}`
     },
     {
      output:'minecraft:stonecutter',
      pattern:['   ','CBC','AAA'],
      key:{
        A: 'compactmachines:wall',
        B: 'psi:psimetal',
        C: 'minecraft:gold_nugget'
      },
      id:`${id_prefix}stonecutter`
     },
     {
      output:'minecraft:crafting_table',
      pattern:['   ','AA ','AA '],
      key:{
        A: 'minecraft:oak_wood'
      },
      id:`${id_prefix}crafting_table`
     },
     {
      output:'botania:mana_pool',
      pattern:['   ','ABA','AAA'],
      key:{
        A: 'botania:livingrock',
        B: 'hexerei:moon_dust'
      },
      id:`${id_prefix}mana_pool`
     },
     {
      output:'8x elementalcraft:whiterock',
      pattern:['BBB','BAB','BBB'],
      key:{
        A: 'hexerei:moon_dust',
        B: 'minecraft:cobblestone'
      },
      id:`${id_prefix}whiterock`
     },
     {
      output:'create:andesite_funnel',
      pattern:['   ','A  ','B  '],
      key:{
        A: 'kubejs:imperfect_andesite_alloy',
        B: 'minecraft:dried_kelp'
      },
      id:`${id_prefix}andesite_funnel`
     },
     {
      output:'8x elementalcraft:elementpipe_impaired',
      pattern:['BAB','   ','   '],
      key:{
        A: 'elementalcraft:whiterock',
        B: 'botania:manasteel_ingot'
      },
      id:`${id_prefix}elementpipe_impaired`
     },
     {
      output:'elementalcraft:extractor',
      pattern:[' B ',' A ','AAA'],
      key:{
        A: 'elementalcraft:whiterock',
        B: 'elementalcraft:elementpipe_impaired'
      },
      id:`${id_prefix}extractor`
     },
     {
      output:'elementalcraft:small_container',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'elementalcraft:contained_crystal',
        B: 'elementalcraft:elementpipe_impaired',
        C:'minecraft:glass'
      },
      id:`${id_prefix}small_container`
     },
     {
      output:'elementalcraft:infuser',
      pattern:['   ','A A','BCB'],
      key:{
        A: 'botania:manasteel_nugget',
        B: 'botania:manasteel_ingot',
        C: 'elementalcraft:contained_crystal',
      },
      id:`${id_prefix}infuser`
     },
     {
      output:'elementalcraft:lavashrine',
      pattern:['AAA','BAB','AAA'],
      key:{
        A: 'elementalcraft:whiterock_burnt',
        B: 'elementalcraft:contained_crystal'
      },
      id:`${id_prefix}lavashrine`
     },
     {
      output:'6x ars_nouveau:arcane_pedestal',
      pattern:['ABA','CAC','CAC'],
      key:{
        A: 'ars_nouveau:sourcestone',
        B: 'elementalcraft:swift_alloy_block',
        C: 'elementalcraft:contained_crystal'
      },
      id:`${id_prefix}arcane_pedestal`
     },
     {
      output:'16x kubejs:polished_gold_block',
      pattern:['AA ','AA ','   '],
      key:{
        A: 'minecraft:gold_block'
      },
      id:`${id_prefix}polished_gold_block`
     },
     {
      output:'kubejs:projector_dish',
      pattern:['AC ','ABC','AC '],
      key:{
        A: 'compactmachines:wall',
        B: 'elementalcraft:source',
        C: 'create:framed_glass_pane'
      },
      id:`${id_prefix}projector_dish`
     },
     {
      output:'cyclic:placer',
      pattern:['ABA','CDC','AAA'],
      key:{
        A: 'compactmachines:wall',
        B: 'ars_nouveau:source_gem_block',
        C: 'kubejs:rough_psimetal',
        D: 'kubejs:source_clay_ball'
      },
      id:`${id_prefix}placer`
     },
     {
      output:'cyclic:user',
      pattern:['BCB','DED','AAA'],
      key:{
        A: 'minecraft:polished_andesite',
        B: 'elementalcraft:contained_crystal',
        C: 'botania:manasteel_ingot',
        D: 'minecraft:gold_nugget',
        E: 'elementalcraft:source'
      },
      id:`${id_prefix}user`
     },
     {
      output:'8x quark:smooth_soul_sandstone',
      pattern:['AA ','AA ','   '],
      key:{
        A: 'quark:soul_sandstone'
      },
      id:`${id_prefix}smooth_soul_sandstone`
     },
     {
      output:'elementalcraft:container',
      pattern:['DED','BCB','AAA'],
      key:{
        A: 'elementalcraft:whiterock',
        B: 'elementalcraft:elementpipe',
        C: 'elementalcraft:burnt_glass',
        D: 'kubejs:gem_earth',
        E: 'spirit:soul_powder'
      },
      id:`${id_prefix}container`
     },
     {
      output:'4x elementalcraft:elementpipe',
      pattern:['   ','ABA','   '],
      key:{
        A: 'kubejs:gem_earth',
        B: 'spirit:soul_powder'
      },
      id:`${id_prefix}elementpipe_1`
     },
     {
      output:'elementalcraft:extractor_improved',
      pattern:[' A ','ADA','BCB'],
      key:{
        A: 'elementalcraft:extractor',
        B: 'elementalcraft:whiterock',
        C: 'kubejs:gem_earth',
        D: 'elementalcraft:swift_alloy_ingot'
      },
      id:`${id_prefix}extractor_improved`
     },
     {
      output:'elementalcraft:binder',
      pattern:['B B','ACA','   '],
      key:{
        A: 'elementalcraft:whiterock',
        B: 'kubejs:gem_earth',
        C: 'elementalcraft:extractor_improved'
      },
      id:`${id_prefix}binder`
     },
     {
      output:'2x quark:soul_sandstone',
      pattern:['AAA','ABA','AAA'],
      key:{
        A: 'minecraft:soul_sand',
        B: 'spirit:soul_powder'
      },
      id:`${id_prefix}soul_sandstone`
     },
     {
      output:'naturesaura:offering_table',
      pattern:['ACA','AAA',' B '],
      key:{
        A: 'naturesaura:infused_stone',
        B: 'ars_nouveau:archwood_planks',
        C: 'kubejs:mana_powder'
      },
      id:`${id_prefix}offering_table`
     },
     {
      output:'createaddition:alternator',
      pattern:['AAA','ABA','ACA'],
      key:{
        A: 'create:limestone',
        B: 'naturesaura:sky_ingot_block',
        C: 'create:shaft'
      },
      id:`${id_prefix}alternator`
     },
     {
      output:'cyclic:collector',
      pattern:['DED','BCB','AAA'],
      key:{
        A: 'naturesaura:infused_slab',
        B: 'create:andesite_casing',
        C: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}').weakNBT(),
        D: 'kubejs:gem_earth',
        E: 'naturesaura:token_joy'
      },
      id:`${id_prefix}collector`
     },
     {
      output:'cwe:source_craftingtable',
      pattern:['AAA','ABA','AAA'],
      key:{
        A: 'create:framed_glass',
        B: Item.of('ars_nouveau:source_jar','{BlockEntityTag:{source:10000}}').weakNBT()
      },
      id:`${id_prefix}source_craftingtable`
     },
     {
      output:'botania:fabulous_pool',
      pattern:['ABA','AAA','   '],
      key:{
        A: 'botania:shimmerrock',
        B: 'hexerei:moon_dust'
      },
      id:`${id_prefix}fabulous_pool_1`
     },
     {
      output:'botania:fabulous_pool',
      pattern:['ABA','AAA','   '],
      key:{
        A: 'kubejs:sky_nugget',
        B: 'botania:mana_pool'
      },
      id:`${id_prefix}fabulous_pool_2`
     },
     {
      output:'8x botania:bifrost_perm',
      pattern:['AAA','ABA','AAA'],
      key:{
        A:'botania:mana_glass',
        B: 'naturesaura:sky_ingot'
      },
      id:`${id_prefix}bifrost_perm`
     },
     {
      output:'8x botania:shimmerrock',
      pattern:['AAA','ABA','AAA'],
      key:{
        A: 'botania:livingrock',
        B: 'naturesaura:sky_ingot'
      },
      id:`${id_prefix}shimmerrock`
     },
     {
      output:'8x create_crystal_clear:andesite_glass_casing',
      pattern:['BBB','BAB','BBB'],
      key:{
        A: 'create:andesite_casing',
        B: 'create:framed_glass'
      },
      id:`${id_prefix}andesite_glass_casing`
     },
     {
      output:'thermal:device_water_gen',
      pattern:['BBB','BAB','BBB'],
      key:{
        A: 'create:andesite_casing',
        B: 'ae2:fluix_crystal'
      },
      id:`${id_prefix}device_water_gen`
     },
     {
      output:'spirit:soul_steel_block',
      pattern:['AAA','AAA','AAA'],
      key:{
        A: 'spirit:soul_steel_ingot'
      },
      id:`${id_prefix}soul_steel_block`
     },
     {
      output:'ae2things:advanced_inscriber',
      pattern:['ADA','CBC','ADA'],
      key:{
        A: 'botania:rune_earth',
        B: 'ae2:inscriber',
        C: 'spirit:soul_steel_ingot',
        D: 'ae2:fluix_glass_cable'
      },
      id:`${id_prefix}advanced_inscriber`
     },
     {
      output:'mythicbotany:petrunia_floating',
      pattern:[' A ',' B ',' C '],
      key:{
        A: '#cwe:twig_wand',
        B: 'mythicbotany:gjallar_horn_full',
        C: 'minecraft:grass_block'
      },
      id:`${id_prefix}petrunia_floating`
     },
     {
      output:'minecraft:dropper',
      pattern:['AAA','A A','ABA'],
      key:{
        A: '#forge:cobblestone',
        B: 'apotheosis:epic_material'
      },
      id:`${id_prefix}dropper`
     },
     {
      output:'mekanism:metallurgic_infuser',
      pattern:['ABA','DCD','ABA'],
      key:{
        A: 'kubejs:soul_steel_sheet',
        B: 'create:basin',
        C: 'create:andesite_casing',
        D: 'apotheosis:rare_material'
      },
      id:`${id_prefix}metallurgic_infuser`
     },
     {
      output:'botania:alfheim_portal',
      pattern:['ABA','ACA','ABA'],
      key:{
        A: '#botania:livingwood_logs',
        B: 'botania:terrasteel_ingot',
        C: 'naturesaura:token_euphoria'
      },
      id:`${id_prefix}alfheim_portal`
     },
     {
      output:'create:fluid_tank',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'elementalcraft:swift_alloy_ingot',
        B: 'botania:bifrost_perm',
        C: 'kubejs:soul_gem'
      },
      id:`${id_prefix}fluid_tank`
     },
     {
      output:'industrialforegoing:fluid_extractor',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'elementalcraft:drenched_iron_ingot',
        B: 'elementalcraft:purecrystal',
        C: 'kubejs:soul_steel_casing'
      },
      id:`${id_prefix}fluid_extractor`
     },
     {
      output:'elementalcraft:binder_improved',
      pattern:[' A ',' B ',' C '],
      key:{
        A: 'elementalcraft:elementpipe_creative',
        B: 'elementalcraft:binder',
        C: 'industrialforegoing:machine_frame_pity'
      },
      id:`${id_prefix}binder_improved`
     },
     {
      output:'ars_creo:starbuncle_wheel',
      pattern:[' A ',' B ',' C '],
      key:{
        A: 'create:shaft',
        B: 'ars_nouveau:starbuncle_charm',
        C: 'create:andesite_casing'
      },
      id:`${id_prefix}starbuncle_whee`
     },
     {
      output:'elementalcraft:drenched_saw_blade',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'kubejs:gaia_nugget',
        B: 'elementalcraft:drenched_iron_ingot',
        C: 'elementalcraft:air_silk'
      },
      id:`${id_prefix}drenched_saw_blade`
     },
     {
      output:'elementalcraft:water_mill_wood_saw',
      pattern:['AAA','BCB','AAA'],
      key:{
        A: 'elementalcraft:whiterock',
        B: 'create:shaft',
        C: 'elementalcraft:drenched_saw_blade'
      },
      id:`${id_prefix}water_mill_wood_saw`
     },
     {
      output:'2x create:deployer',
      pattern:[' A ',' B ',' C '],
      key:{
        A: 'elementalcraft:purecrystal',
        B: 'create:andesite_casing',
        C: 'kubejs:swift_alloy_hand'
      },
      id:`${id_prefix}deployer`
     },
     {
      output:'2x ars_nouveau:arcane_core',
      pattern:['AAA','BCB','AAA'],
      key:{
        A: 'ars_nouveau:sourcestone',
        B: 'kubejs:polished_gold_block',
        C: 'elementalcraft:purecrystal'
      },
      id:`${id_prefix}arcane_core`
     },
     {
      output:'2x ars_nouveau:enchanting_apparatus',
      pattern:['ABA','ACA','ABA'],
      key:{
        A: 'kubejs:polished_gold_block',
        B: 'ars_nouveau:sourcestone',
        C: 'elementalcraft:purecrystal'
      },
      id:`${id_prefix}enchanting_apparatus`
     },
     {
      output:'2x create:mechanical_press',
      pattern:[' A ',' B ',' C '],
      key:{
        A: 'elementalcraft:purecrystal',
        B: 'create:andesite_casing',
        C: 'elementalcraft:swift_alloy_block'
      },
      id:`${id_prefix}mechanical_press`
     },
     {
      output:'2x create:depot',
      pattern:['   ',' A ',' B '],
      key:{
        A: 'elementalcraft:purecrystal',
        B: 'create:andesite_casing'
      },
      id:`${id_prefix}depot`
     },
     {
      output:'2x ars_nouveau:source_jar',
      pattern:['ABA','ACA','ADA'],
      key:{
        A: 'create:framed_glass',
        B: 'kubejs:polished_gold_block',
        C: 'elementalcraft:purecrystal',
        D: 'ars_nouveau:archwood_planks'
      },
      id:`${id_prefix}source_jar`
     },
     {
      output:'8x naturesaura:token_joy',
      pattern:[' A ','ABA',' A '],
      key:{
        A: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}').weakNBT(),
        B: 'elementalcraft:purecrystal'
      },
      id:`${id_prefix}token_joy`
     },
     {
      output:Item.of('ae2:annihilation_plane').enchant('minecraft:fortune', 3).weakNBT(),
      pattern:['AB ','CB ','AB '],
      key:{
        A: 'ae2:certus_quartz_crystal',
        B: 'apotheosis:gem_dust',
        C: 'create:deployer'
      },
      id:`${id_prefix}annihilation_plane/fortune_3`
     },
     {
      output:Item.of('ae2:annihilation_plane').enchant('minecraft:fortune', 5).weakNBT(),
      pattern:['AB ','CB ','AB '],
      key:{
        A: 'kubejs:gem_water',
        B: 'botania:gaia_ingot',
        C: 'create:deployer'
      },
      id:`${id_prefix}annihilation_plane/fortune_5`
     },
     {
      output:'ae2:mysterious_cube',
      pattern:['BBB','BAB','BBB'],
      key:{
        A: 'industrialforegoing:machine_frame_pity',
        B: 'kubejs:gem_water'
      },
      id:`${id_prefix}mysterious_cube`
     },
     {
      output:'redstonepen:control_box',
      pattern:['ABA','CDE','AFA'],
      key:{
        A: 'kubejs:gem_water',
        B: 'minecraft:redstone',
        C: 'ae2:logic_processor',
        D: 'elementalcraft:drenched_iron_ingot',
        E: 'ae2:engineering_processor',
        F: 'ae2:calculation_processor'
      },
      id:`${id_prefix}control_box`
     }]
  
  recipes.forEach(recipe =>{
    event.shaped(recipe.output,recipe.pattern,recipe.key).id(recipe.id)
  })
})