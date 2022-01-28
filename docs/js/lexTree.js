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
    if(node.data("selected")){
      node.style({
        'background-color': 'lightgray',
        'border-color': 'black',
      });
      node.data("selected", false)
      numSelected--
    } else {
      node.style({
        'background-color': 'lightblue',
        'border-color': 'green'
      });
      node.data("selected", true)
      numSelected++
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
        <h4>Base Cost: ${node.data("cost")}</h1>
        <h4>Current Cost: ${node.data("cost") * ((100 + (numSelected * 50)) * .01)}</h1>

        `)
        for (const i in node.data("bonuses")) {
          if(node.data("bonuses")[i] != ""){
            $(hoverElement).append(`<h4>${node.data("bonuses")[i]}</h4>`)
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
