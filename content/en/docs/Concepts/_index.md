---
title: "Concepts"
linkTitle: "Concepts"
weight: 1
description: >
  High level questions, general mechanics of the game
---

### Mobility {{< svg "mobility.svg" >}}

#### What does each point of mobility do?
it increases credits by .1 per system population . When received from a building in a system, it increases the mobility in that system only. When received from a Lex, the full value applies to all of your systems.
#### Other impacts
Mobility is a scaling factor for two late-game buildings: reflect district and business arch. They are generally considered some of the best late game credit generation buildings.


### Stability  {{< svg "stability.svg" >}}
When received from a building in a system, it increases the stability in that system only. When received from a Lex, the full value applies to all of your systems.

Factor’s into growth speed, as you approach 0 stability, or negative values, growth will be hindered.

When below 0, penalties to the system production will occur
View the 3rd tab on the system to view specific values:

### What exactly does SLSD do?  {{< svg "slsd.svg" >}}
SLSD is like radar? It shows enemy fleet movement in range. Higher SLSD means the radius is larger.

### What exactly does Intelligence do?  {{< svg "intelligence.svg" >}}
It makes actions performed by Erased and other agents more difficult

### What exactly does Cybersecurity do? {{< svg "cybersecurity.svg" >}}
Each system has a 20k gauge of cybersecurity. Each tick the cybersecurity score of a system fills in the gauge. When it reaches 20k it removes a random malware, from one faction only, reducing enemy visibility.</br>
*Example*: In a Legacy game a system with 50 cybersecurity, will gain 1000 points/hours, so it will remove 1 malware, over 20 hours.</br>
Also see [Infiltration](/docs/agents/erased/#infiltration) 


### Leaderboard  {{< svg "leaderboard.svg" >}}
#### How are points calculated?
```
gain_credit +
10 * gain_technology +
10 * gain_ideology +
8 * sum_governors_levels +
15 * sum_agents_levels +
1.1 * sum_fleet_maintenance +
stock_credit / 100_000 +
stock_technology / 10_000 +
stock_ideology / 10_000
```

### Resources
#### How fast do resources accumulate?
The number at the bottom of your screen next to each resource show the amount that will be gained every 3 minutes (In Legacy mode). Common practice is to think of at x20 for the amount per hour you will have.
<br/>Example where the player is earning 3441 credits, 205 tech and 363 ideology per 3 minutes <br/>
![resource bar](/images/resource_bar.PNG)

#### Resource Tax on player trades
How long does it take for tax to drop from 60 to 5
not sure anymore..
but like 2% per hour? 

#### Is there a resource cap?
No 


Per *Novae*: of course <br/>

![resource bar](/images/resource_cap.PNG)