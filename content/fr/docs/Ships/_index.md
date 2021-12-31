
---
title: "Navires"
linkTitle: "Navires"
weight: 3
date: 2017-01-05
description: >
  Flottes et navires
---

### Comment les navires obtiennent-ils de l'expérience ?
Vous pouvez augmenter l'XP des vaisseaux via :
- l'académie militaire (Un bâtiment qui ne peut être construit que sur les planètes stériles)
- ligne d'assemblage (du type de vaisseau approprié)
- Avoir un navarque avec une compétence d'entraînement comme gouverneur dans un système qui produit la flotte (10 xp par rang dans la compétence)
- combat 

### Comment l'expérience améliore-t-elle les flottes ? 
+0.5% des statistiques principales par niveau
Coque, Manoeuvrabilité, Attaque énergétique, Attaque explosive, Boucliers, Flak et Moral.

### Combien d'expérience est nécessaire par niveau ?
L'expérience n'est pas fixe par niveau mais exponentielle, comme l'expérience d'un agent.

### Il y a t-il un endroit où je peux trouver ce que font les stats des vaisseaux ? comme la manoeuvrabilité, la différence entre l'énergie et l'attaque explosive, etc ?
Le [Battle simulator] (https://rising-constellation.com/portal/fight-simulator) dans le jeu sous l'Académie Koshak est la meilleure source d'information. 
l'attaque énergétique est réduite par [shield](/docs/ships/stats/#shield), et les explosifs peuvent être bloqués par [flack](/docs/ships/stats/#flack).

### Peut-on faire don de navires ?
Non, seulement des ressources

### Comment construire une flotte
Pour construire une flotte, vous devez d'abord construire les bâtiments nécessaires sur une lune ou un astéroïde d'un système que vous contrôlez (pas un dominion), puis déployer un navarque sur ce système. En le sélectionnant, une petite interface apparaît, affichant six lignes de trois cases. Vous pouvez alors concevoir votre flotte en cliquant sur les cases vides et en construisant les vaisseaux souhaités.

### Quel type de vaisseaux dois-je construire ?
Les stratégies sont toujours en cours d'élaboration, jetez un œil à [Fleet Composition](/docs/strategies/fleets/) et [Ship Stats](/docs/ships/stats/) pour vous aider à déterminer ce que vous devez inclure dans votre flotte. Tenez compte non seulement du combat entre flottes, mais aussi de la puissance de bombardement pour le pillage et le bombardement, ou de la puissance d'invasion pour la conquête.

### Types de navires
Les vaisseaux peuvent être répartis en 5 catégories différentes dans Rising Constellation.

#### Les transporteurs
Les transporteurs sont des vaisseaux individuels avec peu ou pas de capacité de combat de vaisseau à vaisseau, cependant ils sont utiles pour prendre le contrôle de systèmes par conquête ou colonisation.
* {{< svg "ships/colony_ship.svg" >}} **Vaisseau de colonie**
C'est l'un des premiers vaisseaux que vous construirez afin d'étendre votre empire. Il n'a pas de capacité de combat, alors protégez-le si vous pensez que des ennemis sont dans les parages. Il peut être utilisé pour coloniser des systèmes non peuplés. 
* {{< svg "ships/carrier.svg" >}} **Porteur**
Très peu de puissance de combat mais peut apporter beaucoup de puissance d'invasion à une flotte, permettant à un [Navarque d'effectuer une conquête](/docs/agents/navarque/). 

#### Les chasseurs
Les chasseurs peuvent être regroupés en escadrons de 2 à 16 chasseurs du même type. Ils sont les plus petits vaisseaux de combat, ont les coûts de maintenance les plus bas et sont les plus nombreux par escadron. Pour construire des chasseurs, il est nécessaire d'avoir construit une chaîne de montage S-01 sur une lune ou un astéroïde.

* {{< svg "ships/scout.svg" >}} **Scouts** 
Le premier type de vaisseau disponible pour les joueurs, ils sont bon marché et peuvent aider à remplir vos flottes grâce à leur faible coût et leur grande maniabilité.
* {{< svg "ships/fighter_bomber.svg" >}} **Chasseur-bombardier**
Le premier type de vaisseau disponible pour les joueurs avec une cote de bombardement, fournissant des bonus au [Pillage]("/docs/agents/navarch.md#pillaging"), ou permettant à un navarque non qualifié d'effectuer cette action.
* {{< svg "ships/light_fighter.svg" >}} **Combattant léger**
Un vaisseau de combat rapide et polyvalent.
* {{< svg "ships/interceptor.svg" >}} **Intercepteurs**
Très similaire au chasseur léger, mais avec plus de maniabilité et une concentration sur les dommages énergétiques uniquement.

#### Corvettes
Les corvettes peuvent être regroupées en escadrons de 2 à 8 corvettes du même type. Des vaisseaux de combat peu coûteux mais efficaces avec un coût d'entretien moyen. Pour construire des corvettes, il est nécessaire d'avoir construit une chaîne de montage S-02 sur une lune ou un astéroïde.

* {{< svg "ships/light_corvette.svg" >}} **Corvettes légères**
Vaisseau de combat bien équilibré avec des capacités de bombardement modestes.
* {{< svg "ships/heavy_corvette.svg" >}} **Corvettes lourdes**
50 % de puissance de bombardement en plus que les corvettes légères, et un peu plus difficiles à tuer, mais au prix de dégâts de navire à navire.
* {{< svg "ships/multi_turret_corvette.svg" >}} **Corvettes multi-tourelles**
Deux fois plus coûteuses à entretenir que les autres corvettes, avec beaucoup plus de santé, et beaucoup plus de dégâts de navire à navire, mais sans capacité de bombardement.

#### Les frégates
Les frégates peuvent être regroupées en unités de 2 à 4 frégates du même type. Le fuselage modulaire des frégates permet la spécialisation des vaisseaux pour remplir leur mission. Pour construire une frégate, il est nécessaire d'avoir construit un chantier spatial sur une lune ou un astéroïde.

* {{< svg "ships/assault_frigate.svg" >}} **Frigates d'assaut**
Les premiers vaisseaux qui permettront à un [Navarque d'effectuer la conquête](/docs/agents/navarque/) d'un système, bien qu'il puisse en falloir plusieurs pour accumuler assez de puissance d'invasion pour vaincre des systèmes avec un niveau de défense raisonnable. Ces vaisseaux s'en sortent raisonnablement bien dans un combat, leurs boucliers élevés compensent leur faible maniabilité et la combinaison d'attaques explosives et énergétiques les rend raisonnables pour combattre tous les types de vaisseaux.
* {{< svg "ships/gunner.svg" >}} **Gunners**
Spécialisés dans l'abattage des plus gros vaisseaux, ils ont peu d'attaques mais frappent très fort avec des dégâts explosifs et fournissent une grande puissance de bombardement.
* {{< svg "ships/drone_carrier.svg" >}} **Porteurs de drones**
Navires à haute santé et haute défense avec des dégâts plus faibles pour la classe des frégates, mais peuvent aider à ajouter un peu de [réparation](/docs/agents/navarch#repair). votre flotte entre les combats, coût élevé.
* {{< svg "ships/repair_platform.svg" >}} **Plateformes de réparation**
Un vaisseau presque entièrement défensif, axé sur la santé et les boucliers et la flak, ne fait presque pas de dégâts, mais apporte beaucoup de puissance de [réparation](/docs/agents/navarch#repair) à une flotte.

#### Navires capitaux
Les vaisseaux capitaux sont toujours seuls dans leur escadron. Ils sont très coûteux à entretenir. Pour construire un vaisseau capital, il faut avoir construit une hyperstructure d'assemblage sur une lune ou un astéroïde. Les vaisseaux capitaux ont des noms uniques tels que : "L'Impitoyable", "Le Conquérant", "Le Redoutable", etc ...

* Destructeur](/images/ships/destroyer.PNG) **Destructeur**.
* ![croiseur](/images/ships/cruiser.PNG) **Cruiser**
* ![coordinateur](/images/ships/coordinator.PNG) **Coordinateur**
