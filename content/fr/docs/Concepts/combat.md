---
title: "Combat de flotte"
date: 2017-01-05
weight: 2
description: >
  Comment se résout le combat entre deux flottes ?
---

### Comment s'amorce le combat ?
Lorsque deux agents [Navarch](/docs/agents/navarch/) sont dans le même système, le combat peut commencer de l'une des trois manières suivantes :
1. Un joueur clique sur le Navarch ennemi tout en le sélectionnant et choisit de se battre.
2. Un Navarch réglé sur [Stance agressive ou furieuse](/docs/agents/navarch/#stance) attaquera immédiatement les flottes ennemies dans leur système. Si plus d'une flotte dans un système est définie sur agressive ** une seule se battra ** et les autres ne feront que regarder
</br>**REMARQUE** : Il existe actuellement un bogue empêchant que cela se produise si la flotte entre dans le système, il ne se déclenchera que lorsqu'une autre flotte entrera dans le système.
3. Un Navarch défini sur [Position du défenseur](/docs/agents/navarch/#defender) commencera un combat si le système dans lequel il se trouve est attaqué (Pillage/Bombard/Colonisation). La position du défenseur permettra également au navarch de rejoindre un autre navarch de la même faction au combat contre l'ennemi.

### Comment le combat est-il résolu ?
Le combat se déroule en rounds au cours de chaque round les phases suivantes ont lieu :

#### 1. Déploiement
L'escadron de la rangée correspondant au numéro du round est ajouté au champ de bataille.

**Exemple** : Au premier tour de combat, l'escadron de la colonne L1 est déployé (dans ce cas, il s'agit de porte-drones).

![Exemple de flotte 1](/images/fleet_example_1.PNG)

##### Navarques multiples en défense
S'il y a plus d'une navarchie en défense dans le système, celles qui la soutiennent se joindront aux tours 3, 6 et 9..... 

**Exemple** : 3 navarques défendent un système (A,B,C), et un attaquant arrive (X). Par tour, ils rejoignent le combat :
1. A-L1 et X-L1
2. A-L2 et X-L2
3. A-L3 + B-L1 et X-L3
4. A-L4 + B-L2 et X-L4
5. A-L5 + B-L3 et X-L5
6. A-L6 + B-L4 et X-L6
7. B-L5
8. B-L6
9. C-L1

#### 2. Lancer le dé pour l'initiative
Les navarques commandant les flottes comparent leurs niveaux et celui qui a le niveau le plus élevé gagnera plus souvent.

#### 3. Attaque
Chaque escadron effectue à tour de rôle toutes ses attaques contre un escadron ennemi aléatoire sur le champ de bataille.

**Exemple** : un escadron de 2 vaisseaux canonniers effectuera 2 attaques explosives, tandis qu'un escadron de 8 chasseurs légers effectuera 8 * (2 attaques énergétiques + 1 attaque explosive) pour un total de 24 attaques individuelles. 

Tous les dégâts d'une attaque sont infligés à un vaisseau individuel, donc même si un Gunner attaque et touche un chasseur léger avec 25 points de vie, la plupart des 390 de son attaque sont gaspillés, car il ne retire qu'un seul vaisseau de l'escadron de chasseurs légers. [Statistiques des navires](/docs/ships/stats/)


### Moral
Chaque navire a une base de moral, augmentée par le niveau du navire.
Les vaisseaux commencent à 20 de moral, et chaque niveau suivant vous donne 0,5% de plus qui s'applique également à toutes les autres statistiques du vaisseau.
Pendant un combat, si le moral d'un escadron atteint 0, il fuit le combat. 
Le moral se réinitialise à la fin de chaque combat, de sorte que l'escadron retrouve toujours son plein moral avant le combat suivant.

#### Qu'est-ce qui cause la perte de moral ?
Le moral est abaissé par les événements suivants
- sur l'escadron : lorsqu'un vaisseau de l'escadron est détruit
- sur la flotte entière : lorsqu'un escadron de la flotte est détruit. 


#### Qu'est-ce qui fait que les escadrons ne répondent plus aux ordres et fuient au combat ?
Manque de moral
