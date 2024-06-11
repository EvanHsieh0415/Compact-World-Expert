ServerEvents.recipes(event =>{
    /**
    {
     type:,
     filter:{},
     original:,
     replace:
    }
    */
    const replace_recipes = [
        {
            type:'input',
            filter:{mod:'functionalstorage'},
            original:'#balm:wooden_chests',
            replace:'sophisticatedstorage:upgrade_base'
        },
        {
            type:'input',
            filter:{output:'cobblefordays:tier_2'},
            original:'minecraft:glass',
            replace:'cobblefordays:tier_1'
        },
        {
            type:'input',
            filter:{output:'cobblefordays:tier_3'},
            original:'#forge:ingots/iron',
            replace:'create:andesite_alloy'
        },
        {
            type:'input',
            filter:{output:'cobblefordays:tier_3'},
            original:'minecraft:glass',
            replace:'apotheosis:mythic_material'
        },
        {
            type:'input',
            filter:{output:'ae2:quartz_glass'},
            original:'#forge:glass',
            replace:'create_crystal_clear:andesite_glass_casing'
        },
        {
            type:'input',
            filter:{output:'create:mechanical_mixer'},
            original:'create:whisk',
            replace:'kubejs:gold_whisk'
        },
        {
            type:'input',
            filter:{output:'create:mechanical_mixer'},
            original:'create:cogwheel',
            replace:'create:large_cogwheel'
        },
        {
            type:'input',
            filter:{output:'ae2:quartz_growth_accelerator'},
            original:'#forge:ingots/iron',
            replace:'apotheosis:mythic_material'
        },
        {
            type:'input',
            filter:{output:'create:display_board'},
            original:'create:electron_tube',
            replace:'create:belt_connector'
        },
        {
            type:'input',
            filter:{output:'ae2:quartz_growth_accelerator'},
            original:'ae2:fluix_block',
            replace:'ae2:flawless_budding_quartz'
        },
        {
            type:'input',
            filter:{output:'minecraft:dispenser'},
            original:'#forge:dusts/redstone',
            replace:'apotheosis:epic_material'
        },
        {
            type:'input',
            filter:{output:'minecraft:redstone_torch'},
            original:'#forge:dusts/redstone',
            replace:'apotheosis:epic_material'
        },
        {
            type:'input',
            filter:{output:'minecraft:comparator'},
            original:'#forge:gems/quartz',
            replace:'#forge:gems/quartz'
        },
        {
            type:'input',
            filter:{output:'minecraft:cauldron'},
            original:'#forge:ingots/iron',
            replace:'psi:psimetal'
        },
        {
            type:'input',
            filter:{output:'minecraft:hopper'},
            original:'#forge:ingots/iron',
            replace:'psi:psimetal'
        },
        {
            type:'input',
            filter:{output:'minecraft:sticky_piston'},
            original:'#forge:slimeballs',
            replace:'apotheosis:uncommon_material'
        },
        {
            type:'input',
            filter:{input:'minecraft:obsidian'},
            original:'minecraft:obsidian',
            replace:'kubejs:obsidian'
        },
        {
            type:'input',
            filter:{output:'modularrouters:blast_upgrade'},
            original:'minecraft:iron_bars',
            replace:'kubejs:sky_nugget'
        },
        {
            type:'input',
            filter:{output:'modularrouters:fluid_upgrade'},
            original:'#forge:glass',
            replace:'botania:bifrost_perm'
        },
        {
            type:'input',
            filter:{output:'modularrouters:sync_upgrade'},
            original:'#forge:dusts/redstone',
            replace:'apotheosis:epic_material'
        },
        {
            type:'input',
            filter:{output:'minecraft:clock'},
            original:'#forge:dusts/redstone',
            replace:'apotheosis:epic_material'
        },
        {
            type:'input',
            filter:{output:'modularrouters:pickup_delay_augment'},
            original:'#forge:slimeballs',
            replace:'apotheosis:uncommon_material'
        },
        {
            type:'input',
            filter:{output:'modularrouters:redstone_augment'},
            original:'#forge:dusts/redstone',
            replace:'apotheosis:epic_material'
        },
        {
            type:'input',
            filter:{output:'minecraft:comparator'},
            original:'#forge:gems/quartz',
            replace:'ae2:fluix_crystal'
        },
        {
            type:'input',
            filter:{output:'modularrouters:regulator_augment'},
            original:'#forge:gems/quartz',
            replace:'ae2:fluix_crystal'
        },
        {
            type:'input',
            filter:{output:'botania:glimmering_livingwood'},
            original:'#forge:dusts/glowstone',
            replace:'apotheosis:rare_material'
        },
        {
            type:'input',
            filter:{output:'botania:glimmering_livingwood_log'},
            original:'#forge:dusts/glowstone',
            replace:'apotheosis:rare_material'
        },
        {
            type:'input',
            filter:{output:'botania:mana_pylon'},
            original:'botania:mana_diamond',
            replace:'kubejs:mana_certus_quartz_crystal'
        },
        {
            type:'input',
            filter:{output:'botanypots:terracotta_botany_pot'},
            original:'minecraft:flower_pot',
            replace:'kubejs:gem_water'
        },
        {
            type:'input',
            filter:{output:'botanypots:terracotta_hopper_botany_pot'},
            original:'minecraft:flower_pot',
            replace:'kubejs:gem_water'
        },
        {
            type:'input',
            filter:{output:'ae2:not_so_mysterious_cube'},
            original:'ae2:controller',
            replace:'ars_nouveau:blue_archwood_wood'
        },
        {
            type:'input',
            filter:{output:'ae2:not_so_mysterious_cube'},
            original:'ae2:smooth_sky_stone_block',
            replace:'botania:gaia_ingot'
        },
        {
            type:'input',
            filter:{output:'create:pulse_extender'},
            original:'create:brass_sheet',
            replace:'create:iron_sheet'
        },
        {
            type:'input',
            filter:{output:'create:pulse_repeater'},
            original:'create:brass_sheet',
            replace:'create:iron_sheet'
        },
        {
            type:'input',
            filter:{output:/functionalstorage:fluid_.*/},
            original:'#minecraft:planks',
            replace:'elementalcraft:swift_alloy_ingot'
        },
        {
            type:'input',
            filter:{output:'constructionwand:diamond_wand'},
            original:'#forge:gems/diamond',
            replace:'spirit:soul_steel_ingot'
        },
        {
            type:'input',
            filter:{output:/ae2:cell_component_.*/},
            original:'#forge:dusts/redstone',
            replace:'kubejs:gaia_nugget'
        },
        {
            type:'input',
            filter:{output:/ae2:cell_component_.*/},
            original:'#forge:dusts/glowstone',
            replace:'kubejs:gaia_nugget'
        },
        {
            type:'input',
            filter:{output:/ae2:cell_component_.*/},
            original:'ae2:sky_dust',
            replace:'kubejs:gaia_nugget'
        },
        {
            type:'input',
            filter:{output:/ae2:cell_component_.*/},
            original:'#forge:gems/certus_quartz',
            replace:'industrialforegoing:tinydryrubber'
        },
        {
            type:'input',
            filter:{output:/ae2:cell_component_.*/},
            original:'ae2:quartz_glass',
            replace:'thermal:cured_rubber'
        },
        {
            type:'input',
            filter:{output:'ae2:wireless_crafting_terminal'},
            original:'ae2:wireless_receiver',
            replace:'minecraft:diamond'
        },
        {
            type:'input',
            filter:{output:'ae2wtlib:wireless_pattern_access_terminal'},
            original:'ae2:wireless_receiver',
            replace:'minecraft:diamond'
        },
        {
            type:'input',
            filter:{output:'ae2wtlib:wireless_pattern_encoding_terminal'},
            original:'ae2:wireless_receiver',
            replace:'minecraft:diamond'
        },
        {
            type:'input',
            filter:{output:'ae2:wireless_terminal'},
            original:'ae2:wireless_receiver',
            replace:'minecraft:diamond'
        },
        {
            type:'input',
            filter:{output:'ae2:fluix_smart_cable'},
            original:'#forge:dusts/glowstone',
            replace:'ae2:fluix_dust'
        },
        {
            type:'input',
            filter:{output:'ae2:fluix_smart_dense_cable'},
            original:'#forge:dusts/glowstone',
            replace:'ae2:fluix_dust'
        },
        {
            type:'input',
            filter:{output:'cobblefordays:tier_4'},
            original:'minecraft:gold_ingot',
            replace:'spirit:soul_steel_ingot'
        },
        {
            type:'input',
            filter:{output:'cobblefordays:tier_4'},
            original:'minecraft:glass',
            replace:'naturesaura:sky_ingot'
        },
        {
            type:'input',
            filter:{output:'cobblefordays:tier_5'},
            original:'minecraft:glass',
            replace:'naturesaura:depth_ingot'
        },
        {
            type:'input',
            filter:{output:'laserio:laser_wrench'},
            original:'#forge:ingots/iron',
            replace:'psi:psimetal'
        },
        {
            type:'input',
            filter:{output:'laserio:card_holder'},
            original:'#forge:ingots/iron',
            replace:'psi:psimetal'
        },
        {
            type:'input',
            filter:{output:'laserio:overclocker_card'},
            original:'#forge:dusts/redstone',
            replace:'apotheosis:epic_material'
        },
        {
            type:'input',
            filter:{output:'laserio:filter_basic'},
            original:'minecraft:iron_bars',
            replace:'hexerei:moon_dust'
        },
        {
            type:'input',
            filter:{output:'laserio:filter_count'},
            original:'minecraft:observer',
            replace:'cyclic:user'
        },
        {
            type:'input',
            filter:{output:'bettermuffling:muffling_block'},
            original:'minecraft:note_block',
            replace:'botania:livingwood_log'
        },
        {
            type:'input',
            filter:{output:'create_new_age:energiser_t2'},
            original:'minecraft:lightning_rod',
            replace:'create_new_age:overcharged_diamond'
        },
        {
            type:'input',
            filter:{output:'create:empty_blaze_burner'},
            original:'create:iron_sheet',
            replace:'create_new_age:overcharged_diamond'
        },
        {
            type:'input',
            filter:{output:'botania:glimmering_dreamwood_log'},
            original:'minecraft:glowstone_dust',
            replace:'apotheosis:mythic_material'
        },
        {
            type:'input',
            filter:{output:'botania:glimmering_dreamwood'},
            original:'minecraft:glowstone_dust',
            replace:'apotheosis:mythic_material'
        },
        {
            type:'input',
            filter:{output:'fluxnetworks:flux_configurator'},
            original:'minecraft:ender_eye',
            replace:'botania:mana_diamond'
        },
        {
            type:'input',
            filter:{output:'fluxnetworks:flux_core'},
            original:'minecraft:ender_eye',
            replace:'botania:mana_diamond'
        },
        {
            type:'input',
            filter:{output:'functionalstorage:storage_controller'},
            original:'#forge:storage_blocks/quartz',
            replace:'ae2:fluix_block'
        },
        {
            type:'input',
            filter:{output:/functionalstorage:framed_.*/},
            original:'minecraft:iron_nugget',
            replace:'hexerei:moon_dust'
        },
        {
            type:'input',
            filter:{output:'functionalstorage:simple_compacting_drawer'},
            original:'minecraft:iron_ingot',
            replace:'hexerei:moon_dust'
        },
        {
            type:'input',
            filter:{output:'functionalstorage:compacting_drawer'},
            original:'minecraft:iron_ingot',
            replace:'hexerei:moon_dust'
        },
        {
            type:'input',
            filter:{output:'createutilities:void_motor'},
            original:'createutilities:graviton_tube',
            replace:'spirit:soul_steel_ingot'
        },
        {
            type:'input',
            filter:{output:'minecraft:repeater'},
            original:'minecraft:redstone',
            replace:'apotheosis:epic_material'
        },
        {
            type:'input',
            filter:{output:'create:propeller'},
            original:'create:iron_sheet',
            replace:'create:golden_sheet'
        },
        {
            type:'input',
            filter:{output:'elementalcraft:elementpipe_improved'},
            original:'elementalcraft:elementpipe_impaired',
            replace:'elementalcraft:elementpipe'
        },
        {
            type:'input',
            filter:{output:'createaddition:rolling_mill'},
            original:'#forge:plates/iron',
            replace:'quark:purple_rune'
        },
        {
            type:'input',
            filter:{output:'create_new_age:heat_pipe'},
            original:'create:zinc_nugget',
            replace:'create:brass_nugget'
        },
        {
            type:'input',
            filter:{output:'create_new_age:heater'},
            original:'minecraft:iron_nugget',
            replace:'create_new_age:copper_circuit'
        },
        {
            type:'input',
            filter:{output:'functionalstorage:void_upgrade'},
            original:'#functionalstorage:drawer',
            replace:'kubejs:functionalstorage_upgrade_base'
        },
        {
            type:'input',
            filter:{output:'mekanism:gauge_dropper'},
            original:'mekanism:ingot_osmium',
            replace:'minecraft:copper_ingot'
        },
        {
            type:'input',
            filter:{output:'mekanism:ultimate_mechanical_pipe'},
            original:'mekanism:alloy_atomic',
            replace:'mekanism:ultimate_control_circuit'
        },
        {
            type:'input',
            filter:{output:'mekanism:ultimate_pressurized_tube'},
            original:'mekanism:alloy_atomic',
            replace:'mekanism:ultimate_control_circuit'
        },
        {
            type:'input',
            filter:{output:'mekanism:ultimate_logistical_transporter'},
            original:'mekanism:alloy_atomic',
            replace:'mekanism:ultimate_control_circuit'
        },
        {
            type:'input',
            filter:{output:'ars_nouveau:basic_spell_turret'},
            original:'minecraft:redstone_block',
            replace:'naturesaura:sky_ingot_block'
        }]

    replace_recipes.forEach(replace_recipe =>{
        if(replace_recipe.type == 'input'){
            event.replaceInput(replace_recipe.filter,replace_recipe.original,replace_recipe.replace)
        }else{
            event.replaceOutput(replace_recipe.filter,replace_recipe.original,replace_recipe.replace)
        }
    })
})