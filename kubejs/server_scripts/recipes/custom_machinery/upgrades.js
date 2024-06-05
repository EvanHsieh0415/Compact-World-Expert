CustomMachineryEvents.upgrades(event =>{
    event.create('industrialforegoing:processing_addon_2',1)
    .machine('cwe:ore_laser')
    .modifier(CMRecipeModifierBuilder.mulOutput('custommachinery:speed', 0.8).min(400))
    .modifier(CMRecipeModifierBuilder.expInput('custommachinery:energy', 1.5).max(10000))

    event.create('industrialforegoing:speed_addon_2',1)
    .machine('cwe:ore_laser')
    .modifier(CMRecipeModifierBuilder.expInput('custommachinery:speed', 0.7).min(300))
    .modifier(CMRecipeModifierBuilder.expInput('custommachinery:energy', 1.5).max(10000))


    event.create('industrialforegoing:efficiency_addon_2',1)
    .machine('cwe:ore_laser')
    .modifier(CMRecipeModifierBuilder.expInput('custommachinery:speed', 0.8).min(400))
    .modifier(CMRecipeModifierBuilder.expInput('custommachinery:energy', 1.5).max(10000))


    event.create('industrialforegoing:ore_laser_base',36)
    .machine('cwe:ore_laser')
    .modifier(CMRecipeModifierBuilder.expInput('custommachinery:speed', 0.8).min(40))
    .modifier(CMRecipeModifierBuilder.expInput('custommachinery:energy', 1.1).max(10000))
})