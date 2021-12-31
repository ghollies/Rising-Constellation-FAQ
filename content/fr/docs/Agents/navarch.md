---
title: "Navarch"
date: 2017-01-05
weight: 2
description: >
  Des agents qui peuvent conquérir, piller ou attaquer.
---
## Capacités
### Pillage ![Bombardement](/images/bombing.PNG)
Permet à un navarque de piller les ressources d'un système ou d'un dominion contrôlé par l'ennemi. Compare la puissance totale de bombardement du navarque à la défense du système. Augmentée par la compétence Conquête, et par la présence de certains types de vaisseaux dans la flotte. voir [Ship Stats - Bombing](/docs/ships/stats/#what-are-the-base-stats-of-all-of-the-ships) 
#### Le temps de pillage dépend-il de la puissance de bombardement ?
Oui, cela dépend légèrement de la puissance de défense et de bombardement. Le temps de base pour un pillage est de 1h.
### Combien vais-je gagner en pillant ?
Un pillage donne 150 ticks de la production du système pour un niveau de succès normal, et 200 ticks pour un critique. Chaque pillage diminue le % de ressources pillées de 45% et se récupère au fil du temps de 0,25% par tic. 

### Conquête ![Invasion](/images/invasion.PNG)
Permet à un navarque de convertir un système ou un dominion contrôlé par l'ennemi en un système directement sous son contrôle. Compare la puissance totale d'invasion du navarque à la défense du système. Augmenté par la compétence Conquête, et par la présence de certains types de vaisseaux dans la flotte. voir [Ship Stats - Invasion](/docs/ships/stats/#what-are-the-base-stats-of-all-of-the-ships) 
#### Le temps de conquête dépend-il de la puissance d'invasion ?
oui, cela dépend légèrement de la défense et de la puissance d'invasion

#### De quelle puissance d'invasion ai-je besoin ?
La puissance d'invasion est comparée à la défense du système

### Réparation ![Repair](/images/repair.PNG)
Répare la flotte sous le contrôle du navarche. Augmenté par la compétence Leadership et par la présence de certains types de vaisseaux dans la flotte. voir [Ship Stats - Repair](/docs/ships/stats/#what-are-the-base-stats-of-all-of-the-ships) 

#### Combien de temps prennent les réparations ?
Les réparations ne sont effectuées que lorsqu'une flotte ne se déplace pas ou ne participe pas à une action offensive. Les navires sont réparés en commençant par le navire dont le pourcentage de santé est le plus bas. Le taux de réparation est le suivant :

**Score de réparation * 0,5 HP par tic**.

**Exemple** : Un navarque avec 2 rangs de réparation, et qui a un transporteur de drones x2 dans sa flotte aura 
(2 rangs * 4) + (4 points de la flotte) = 12 points de réparation. Réparant 6 HP par tic. Donc, dans l'héritage avec des ticks de 3 minutes, vous pouvez l'estimer à 120 HP par heure.


## Stance
### Défenseur
Se joindra à des combats et engagera des ennemis pour empêcher le pillage/le bombardement/la colonisation. Mais il n'engagera pas de combat avec les ennemis du même système.

### Déserteur
Tente de fuir le combat dès que possible.

### Prudent
Ne se battra que s'il est directement attaqué

### Agressif
Engagera automatiquement tout ennemi dans le même système

### Furie
Engagera automatiquement tout ennemi dans le même système
Dans une implémentation future, engagera également les flottes non alliées.


### Que se passe-t-il si vous rappelez un Navarque avec une flotte ?
Le rappeler détruira la flotte.

