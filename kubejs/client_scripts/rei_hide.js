REIEvents.hide('item', event => {
    const rei_hide = [
        'cyclic:crafting_stick',
        'cyclic:crafting_bag',
        'aiotbotania:livingwood_sword',
        'aiotbotania:livingwood_shovel',
        'aiotbotania:livingwood_pickaxe',
        'aiotbotania:livingwood_axe',
        'aiotbotania:livingwood_aiot',
        'naturesaura:ancient_sapling',
        /quark:.*_chest/,
        /sophisticatedstorage:.*_barrel_.*/,
        /sophisticatedstorage:barrel/,
        /sophisticatedstorage:chest/,
        /sophisticatedstorage:.*_barrel/,
        /sophisticatedstorage:.*_chest/,
        /sophisticatedstorage:shulker_box/,
        /sophisticatedstorage:.*_shulker_box/,
        /hexerei:.*_chest/,
        'sophisticatedstorage:basic_to_iron_tier_upgrade',
        'sophisticatedstorage:basic_to_copper_tier_upgrade',
        'sophisticatedstorage:basic_tier_upgrade',
        /sophisticatedstorage:iron_to_.*/,
        /sophisticatedstorage:copper_.*/,
        'sophisticatedstorage:stack_upgrade_tier_1',
        'sophisticatedstorage:stack_upgrade_tier_2',
        'sophisticatedstorage:stack_upgrade_tier_1_plus',
        'functionalstorage:copper_upgrade',
        'cyclic:crusher',
        'sophisticatedbackpacks:iron_backpack',
        'sophisticatedbackpacks:copper_backpack',
        'sophisticatedbackpacks:stack_upgrade_starter_tier',
        'sophisticatedbackpacks:stack_upgrade_tier_1',
        'aiotbotania:livingwood_hoe',
        'compactcrafting:projector_dish',
        /ars_nouveau:.*_sourcelink/,
        'botania:cocoon',
        'ars_nouveau:novice_spell_book',
        'naturesaura:effect_powder',
        'ae2:flawed_budding_quartz',
        'ae2:chipped_budding_quartz',
        'ae2:damaged_budding_quartz',
        'mythicbotany:petrunia',
        'botania:endoflame',
        'minecraft:obsidian',
        /elementalcraft:shrine_upgrade_.*/,
        'elementalcraft:scroll',
        'elementalcraft:pure_ore',
        'elementalcraft:springshrine',
        'elementalcraft:groveshrine',
        'elementalcraft:breedingshrine',
        'elementalcraft:enderlockshrine',
        'elementalcraft:sweetshrine',
        'elementalcraft:overloadshrine',
        'elementalcraft:buddingshrine',
        'elementalcraft:spell_desk',
        'elementalcraft:growthshrine',
        'elementalcraft:harvestshrine',
        'elementalcraft:spawningshrine',
        'elementalcraft:lumbershrine',
        'elementalcraft:oreshrine',
        'elementalcraft:firepylon',
        'elementalcraft:firefurnace',
        'elementalcraft:fireblastfurnace',
        'elementalcraft:purifier',
        'elementalcraft:vacuumshrine',
        'industrialforegoing:transporter',
        'create:water_wheel',
        'create:large_water_wheel',
        /botanypots:.*\_terracotta_botany_pot/,
        /botanypots:.*\_terracotta_hopper_botany_pot/,
        /botanypots:.*\_concrete_botany_pot/,
        /botanypots:.*\_concrete_hopper_botany_pot/
    ]

    rei_hide.forEach(hides =>{
        event.hide(hides)
    })

    const other_functional_storage = ['jungle','birch','spruce','acacia','dark_oak','crimson','warped','mangrove']
    const other_functional_storage_tier = ['1','2','4']
    other_functional_storage_tier.forEach(tier =>{
    other_functional_storage.forEach(storage =>{
        event.hide('functionalstorage:' + storage + '_' +  tier)
    })
    })

    const mythicbotany_capacity_flower = ['feysythia','raindeletia']
    const botania_capacity_flower = ['dandelifeon','rafflowsia','shulk_me_not','entropinnyum','munchdew','rosa_arcana','thermalily','hydroangeas','spectrolus','narslimmus','gourmaryllis','kekimurus']
    mythicbotany_capacity_flower.forEach(flowers =>{
        event.hide('mythicbotany:' + flowers)
        event.hide('mythicbotany:' + flowers + '_floating')
    })
    botania_capacity_flower.forEach(flowers =>{
        event.hide('botania:' + flowers)
        event.hide('botania:floating_' + flowers)
    })
})