---
title: "Notions"
linkTitle: "Notions"
weight: 1
description: >
  Questions de haut niveau, mécanique générale du jeu
---

### Mobilité {{< svg "mobility.svg" >}}

#### A quoi sert chaque point de mobilité ?
Il augmente les crédits de 0,1 par population du système. Lorsqu'il est reçu d'un bâtiment dans un système, il augmente la mobilité dans ce système uniquement. Lorsqu'il est reçu d'une Lex, la valeur totale s'applique à tous vos systèmes.
#### Autres impacts
La mobilité est un facteur d'échelle pour deux bâtiments de fin de partie : le district de réflexion et l'arche commerciale. Ils sont généralement considérés comme faisant partie des meilleurs bâtiments de génération de crédits en fin de jeu.


### Stabilité {{< svg "stability.svg" >}}
Lorsqu'il est reçu d'un bâtiment dans un système, il augmente la stabilité dans ce système uniquement. Lorsqu'il est reçu d'une Lex, la valeur totale s'applique à tous vos systèmes.

Facteur de vitesse de croissance, lorsque vous vous approchez de 0 stabilité, ou de valeurs négatives, la croissance sera entravée.

En dessous de 0, la production du système sera pénalisée.
Consultez le 3ème onglet du système pour voir les valeurs spécifiques :

### Que fait exactement le SLSD ?  {{< svg "slsd.svg" >}}
Le SLSD est comme un radar ? Il montre le mouvement de la flotte ennemie dans un rayon. Un SLSD plus élevé signifie que le rayon est plus grand.

### Que fait exactement l'intelligence ?  {{< svg "intelligence.svg" >}}
Il rend plus difficiles les actions effectuées par les Effacés et les autres agents.

### Que fait exactement la Cybersécurité ? {{< svg "cybersecurity.svg" >}}
Inspecte et supprime les logiciels malveillants ennemis dans le système, réduisant ainsi la visibilité de l'ennemi. Chaque tranche de 100 points en cybersécurité supprime les logiciels malveillants à raison de 1 par 12 heures. Voir [Infiltration](/docs/agents/erased/#infiltration). 


### Leaderboard {{< svg "leaderboard.svg" >}}
#### Comment les points sont-ils calculés ?
```
gain_crédit +
10 * gain_technologie +
10 * gain_idéologie +
8 * somme_niveaux_gouverneurs +
15 * somme_agents_niveaux +
1,1 * sum_fleet_maintenance +
stock_crédit / 100_000 +
stock_technologie / 10_000 +
stock_idéologie / 10_000
```

### Ressources
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