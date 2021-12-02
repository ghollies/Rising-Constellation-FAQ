---
title: "Fleet Combat"
date: 2017-01-05
weight: 2
description: >
  How does combat between two fleets get resolved? 
---

### How is combat initiated?
When two [Navarch](/docs/agents/navarch/) agents are in the same system combat can begin in one of three ways:
#1 A player clicks on the the enemy Navarch while selecting their, and chooses to fight.
#2 A Navarch set to [Aggressive or Fury stance](/docs/agents/navarch/#stance) will immediately attack enemy fleets in their system.
#3 A Navarch set to [Defender stance](/docs/agents/navarch/#defender) will begin a fight if the system they are in is under attack (Pillage/Bombard/Colonization)

### How does Combat get resolved?
Combat occurs in rounds during each round the following phases take place:

#### 1. Deployment
The units in the row corresponding to the round number are added to the battlefield.

**Example**: On the first round of combat, the units in the L1 column would be deployed, (Drone Carriers in this case)

![Fleet Example 1](/images/fleet_example_1.PNG)

#### 2. Roll for initiative
The two sides compare their morale scores and the units are ordered according to their morale (the highest morale starts)

#### 3. Attack
Each unit takes turns making all of its attacks against a random enemy unit on the battlefield.

**Example**: a unit of 2 Gunner ships would make 2 explosive attacks, where a unit of 8 Light Fighters would make 8 * (2 energy attacks + 1 explosive attack) for a total of 24 individual attacks. 

All of the damage from an attack goes to an individual ship, so even if a Gunner attacks and hits a light fighter with 25 health, most of the 390 of its attack is wasted, as it only removes a single ship from the unit of light fighters


### Morale
Each ship has a morale base, increased by the level of the navarch of the fleet and the level of the ship
Ships start at 20 morale, and every level after gets you 0.5% more that also applies to all of the other statistics of the ship
