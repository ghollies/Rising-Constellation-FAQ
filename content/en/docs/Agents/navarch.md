---
title: "Navarch"
date: 2017-01-05
weight: 2
description: >
  Agents which can Conquest, Pillage or Attack
---

![Navarch](https://asylamba.com/public/media/files/sources/navarch-tetrarchy.png)
(note some exact values in the image are out of date)

## Classes
| Name | Primary skill |
| --- | --- |
| Strategist | Leadership |
| Butcher | Strike |
| Conquerer | Conquest |
| Shipowner | Production |
| Sentinel | Defense |
| Instructor | Training |

## Abilities
### Pillaging ![Bombing](/images/bombing.PNG)
Allows a navarch to raid resources from an enemy controlled system or dominion. Compares the navarch's total bombing power against the defense of the system. Increased by Conquest skill, and by having certain types of ships in the fleet. see [Ship Stats - Bombing](/docs/ships/stats/#what-are-the-base-stats-of-all-of-the-ships) 
#### Does the time to pillage depend on bombing power?
yes slightly depends on defense and bombing power. The base time length for a pillage is 1h
### How much will I get from pillaging?
One pillage gives 150 ticks of the production of the system for a normal level of success, and 200 ticks for a critical. Each pillage lowers % of resources raided by 45% and it recovers over time by .25% per tick 

### Conquest ![Invasion](/images/invasion.PNG)
Allows a navarch to convert an enemy controlled system or dominion into a system directly under your control. Compares the navarch's total invasion power against the defense of the system. Increased by Conquest skill, and by having certain types of ships in the fleet. see [Ship Stats - Invasion](/docs/ships/stats/#what-are-the-base-stats-of-all-of-the-ships) 
#### Does the time to conquest depend on invasion power?
yes slightly depends on defense and invasion power

#### How much invasion power do I need?
Invasion power is compared to system defense

### Repair ![Repair](/images/repair.PNG)
Repairs the fleet under the navarch's control. The Navarch gives 5 points of repair to the fleet for each skill rank. Increased by the Leadership skill, and by having certain types of ships in the fleet. see [Ship Stats - Repair](/docs/ships/stats/#what-are-the-base-stats-of-all-of-the-ships) 

#### How long do repairs take?
Repairs will only happen while a fleet is not moving or engaging in an offensive action. Ships will be repaired starting with the ship at lowest % health first. The rate of repair is:

**Repair Score * .5 HP per tick.**

**Example**: A navarch with 2 ranks of repair, and has a drone carrier x2 in their fleet will have 
(2 ranks * 5) + (4 score from fleet) = 12 repair score. Repairing 6 HP per tick. So in legacy with 3 minute ticks you can estimate it at 120 HP per hour.


## Stance
### Defender
Will join into fights, and engage enemies to prevent pillaging/bombarding/colonization. But will not otherwise start a fight with enemies in the same system

### Deserter
Attempts to flee combat as soon as possible

### Prudent
Will only fight if directly attacked

### Aggressive
Will automatically engage any enemy in the same system

### Fury
Will automatically engage any enemy in the same system
In a future implementation, will also engage non-allied fleets.


## What happens if you recall a Navarch with a fleet?
recalling them will destroy the fleet
