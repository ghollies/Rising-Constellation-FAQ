
iconMap = {
  ":sys_technology":"tech_resource.svg",
  ":sys_ideology":"ideo_resource.svg",
  ":sys_credit":"credit.svg",
  ":sys_production" : "production.svg",
  ":sys_habitation" : "housing_resource.svg",
  ":sys_mobility" : "mobility.svg",
  ":sys_happiness" : "stability.svg",
  ":sys_defense": "defense.svg",
  ":sys_pop": "system_population.svg",
  ":body_tec":"system_tech.svg",
  ":body_act":"system_appeal.svg",
  ":body_pop":"population.svg",
  ":body_ind":"system_prod.svg",
  ":sys_ci":"intelligence.svg",
  ":sys_fighter_lvl" : "Fighter Experience",
  ":sys_corvette_lvl" : "Corvette Experience",
  ":sys_frigate_lvl" : "Frigate Experience",
  ":sys_capital_lvl" : "Capital Ship Experience",
  ":sys_remove_contact": "cybersecurity.svg",
  ":sys_radar" : "slsd.svg",
  ":direct":"",
  ":add":"  ",
  ":mul":" * ",

  ":player_spy":" Erased Slots",
  ":player_admiral":" Navarch Slots",
  ":player_speaker":" Siderian Slot",
  ":player_system":" System Slot",
  ":player_dominion":" Dominion Slot",
  ":dominion_rate":" Dominion Income Rate",


  ":player_credit":"credit.svg",

  ":player_ideology":"ideo_resource.svg",
  ":player_technology":"tech_resource.svg",
  ":spy_assassination" :"agents/removal.svg",
  ":spy_infiltrate" :"agents/infiltrate.svg",
  ":spy_sabotage" :"Erased Sabotage Skill",
  ":army_maintenance":" Fleet Maintenance Cost",
  ":army_raid":"agents/bombing.svg",
  ":speaker_make_dominion":" Siderian Propaganda Skill", 
  ":speaker_encourage_hate":" Siderian Destabilization Skill", 
  }
function getCurrentCost(node, numSelected){
  return node.data("cost") * ((100 + (numSelected * 5)) * .01)
}
function getEle(ele){
  var eleVal = iconMap[ele]
  if(eleVal != undefined && eleVal.includes(".svg")){
    return  `<img style="background:black" src="/Rising-Constellation-FAQ/images/svg/${eleVal}"/>`
  }
//   return  `<img style="background:black" src="/images/svg/${imageFile}"/>`
return (eleVal == undefined ? ele : eleVal)

}
function convertBonus(bonusLine){
  var bonusElements = bonusLine.split(",");
  return getEle(bonusElements[3]) + " + ( " + getEle(bonusElements[0]) + getEle(bonusElements[2]) + getEle(bonusElements[1]) + ")"
}
function validateClick(node){
  if(node.data("selected")){
    for (child in node.outgoers().targets()) { 
      if(node.outgoers().targets()[child].data != undefined && node.outgoers().targets()[child].data("selected")){
        return false
      }
    }  
  } else {
    console.log(node.parent())
    for (parent in node.incomers().sources()) {
      if(node.incomers().sources()[parent].data != undefined && !node.incomers().sources()[parent].data("selected")){
        return false
      }
    }

  }
  return true;
}
$.getJSON('/Rising-Constellation-FAQ/lexes-115.json', function(dataRaw) {
var nodesInGraph = []
            //     { data: { id: 'n0' } },

var edgesInGraph = []
//     { data: { source: 'n0', target: 'n1' } },

for (const i in dataRaw) {
    console.log(dataRaw[i]) 
    nodesInGraph.push({
      data: {
        id: dataRaw[i]["key"],
        name: dataRaw[i]["Name"],
        cost: dataRaw[i]["cost"],
        bonuses:[ 
          dataRaw[i]["bonus1"],
          dataRaw[i]["bonus2"],
          dataRaw[i]["bonus3"],
          dataRaw[i]["bonus4"],
          dataRaw[i]["bonus5"],
          dataRaw[i]["bonus6"]]
        }})
    edgesInGraph.push( { data: { source: dataRaw[i]["ancestor"], target: dataRaw[i]["key"] } })

}
var numSelected = 0

var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),
    // zoom: 3,
    wheelSensitivity : .2,
    pan: { x: 0, y: 10000 },

    boxSelectionEnabled: false,
    autounselectify: true,
  
    style: [
      {
        selector: 'node',
        css: {
            
          'content': 'data(name)',
          'text-valign': 'center',
          'text-halign': 'center',
          'height': '7em',
          'width': '7em',
          'text-max-width': "10",
          'text-wrap': 'wrap',
          'shape': "ellipse",
          'background-color': 'lightgray',
          'border-color': 'black',

          'border-opacity': '1',
          'border-width': '.5px'
        }
      },
      {
        selector: '$node > node',
        css: {
        //   'padding-top': '10px',
        //   'padding-left': '10px',
        //   'padding-bottom': '10px',
        //   'padding-right': '10px',
          'text-valign': 'top',
          'text-halign': 'center',
          'background-color': '#bbb'
        }
      },
      {
        selector: 'edge',
        css: {
          'target-arrow-shape': 'triangle'
        }
      },
      {
        selector: ':selected',
        css: {
          'background-color': 'black',
          'line-color': 'black',
          'target-arrow-color': 'black',
          'source-arrow-color': 'black'
        }
      }
    ],
  
    elements: {
              nodes: nodesInGraph,
              edges: edgesInGraph,
            },
  
    layout: {
      name: 'dagre',
    //   padding: 5
    }
  });
  cy.nodes().ungrabify()
  cy.maxZoom( 1 )
  cy.minZoom( .4)

  var hoverElement = document.createElement('div');

  cy.on('click', 'node', function(event) {
    var node = event.target;
    if ( !validateClick(node)){
      return;
    }
    if(node.data("selected")){
      node.style({
        'background-color': 'lightgray',
        'border-color': 'black',
      });
      node.data("selected", false)
      currentSpent=Number($("#spent").text().split(": ")[1])
      $("#spent").text("Total Spent: " + (currentSpent - node.data("purchaseCost")))
      numSelected--
      $("#multiplier").text("Cost Multiplier: "+ (100+(numSelected*5)) + "%")
    } else {
      node.style({
        'background-color': 'lightblue',
        'border-color': 'green'
      });
      node.data("selected", true)
      currentSpent=Number($("#spent").text().split(": ")[1])
      node.data("purchaseCost", getCurrentCost(node, numSelected))
      $("#spent").text("Total Spent: " + (currentSpent + getCurrentCost(node, numSelected)))
      numSelected++
      $("#multiplier").text("Cost Multiplier: "+ (100+(numSelected*5)) + "%")
    }
  });
  
  

  cy.on('mouseout', 'node', function(event) {
    // console.log(event)
    hoverElement.remove()
  });
  
  cy.on('mouseover', 'node', function(event) {
    var node = event.target;

    node.popper({
      content: () => {
        hoverElement.remove()
        hoverElement = document.createElement('div');
        hoverElement.style.backgroundColor = "black"
        hoverElement.style.color = "white"
        hoverElement.style.zIndex = "99999"

       $(hoverElement).append(`
        <h1>${node.data("name")}</h1>
        <h4>Base Cost: ${node.data("cost")}</h1>`)
        if(node.data("selected")){
          $(hoverElement).append(`
        <h4>Purchased for: ${node.data("purchaseCost")}</h1>
        `)
        } else{
          $(hoverElement).append(`
        <h4>Current Cost: ${getCurrentCost(node, numSelected)}</h1>`)
        }
        for (const i in node.data("bonuses")) {
          if(node.data("bonuses")[i] != ""){
            $(hoverElement).append(`<h4>${convertBonus(node.data("bonuses")[i])}</h4>`)
            // $(hoverElement).append(`<h4>${node.data("bonuses")[i]}</h4>`)
          }
        }
        document.body.appendChild(hoverElement);
    
        return hoverElement;
      },
      popper: {} // my popper options here
    });
});

  // let popper1 = cy.nodes()[0].popper({
  //   content: () => {
  //     let div = document.createElement('div');
  
  //     div.innerHTML = 'Popper content';
  
  //     document.body.appendChild(div);
  
  //     return div;
  //   },
  //   popper: {} // my popper options here
  // });

  $("#cy").css("position","relative")
  console.log("ending")
});
//   <!-- });
