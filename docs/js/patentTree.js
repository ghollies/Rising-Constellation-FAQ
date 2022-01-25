$.getJSON('/Rising-Constellation-FAQ/patents.json', function(dataRaw) {
var nodesInGraph = []
            //     { data: { id: 'n0' } },

var edgesInGraph = []
//     { data: { source: 'n0', target: 'n1' } },

for (const i in dataRaw) {
    console.log(dataRaw[i]) 
    nodesInGraph.push({ data: {id: dataRaw[i]["key"]}})
    edgesInGraph.push( { data: { source: dataRaw[i]["ancestor"], target: dataRaw[i]["key"] } })

}

var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),
  
    boxSelectionEnabled: false,
    autounselectify: true,
  
    style: [
      {
        selector: 'node',
        css: {
            
          'content': 'data(id)',
          'text-valign': 'center',
          'text-halign': 'center',
          'height': '6em',
          'width': '6em',
          'shape': "hexagon",
          'border-color': 'black',
          'border-opacity': '1',
          'border-width': '5px'
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
            //   [
            //     { data: { id: 'n0' } },
            //     { data: { id: 'n1' } },
            //     { data: { id: 'n2' } },
            //     { data: { id: 'n3' } },
            //     { data: { id: 'n4' } },
            //     { data: { id: 'n5' } },
            //     { data: { id: 'n6' } },
            //     { data: { id: 'n7' } },
            //     { data: { id: 'n8' } },
            //     { data: { id: 'n9' } },
            //     { data: { id: 'n10' } },
            //     { data: { id: 'n11' } },
            //     { data: { id: 'n12' } },
            //     { data: { id: 'n13' } },
            //     { data: { id: 'n14' } },
            //     { data: { id: 'n15' } },
            //     { data: { id: 'n16' } }
            //   ],
              edges: edgesInGraph,
            //    [
            //     { data: { source: 'n0', target: 'n1' } },
            //     { data: { source: 'n1', target: 'n2' } },
            //     { data: { source: 'n1', target: 'n3' } },
            //     { data: { source: 'n2', target: 'n7' } },
            //     { data: { source: 'n2', target: 'n11' } },
            //     { data: { source: 'n2', target: 'n16' } },
            //     { data: { source: 'n3', target: 'n4' } },
            //     { data: { source: 'n3', target: 'n16' } },
            //     { data: { source: 'n4', target: 'n5' } },
            //     { data: { source: 'n4', target: 'n6' } },
            //     { data: { source: 'n6', target: 'n8' } },
            //     { data: { source: 'n8', target: 'n9' } },
            //     { data: { source: 'n8', target: 'n10' } },
            //     { data: { source: 'n11', target: 'n12' } },
            //     { data: { source: 'n12', target: 'n13' } },
            //     { data: { source: 'n13', target: 'n14' } },
            //     { data: { source: 'n13', target: 'n15' } },
            //   ]
            },
  
    layout: {
      name: 'dagre',
    //   padding: 5
    }
  });
function aaa(){
  console.log("before")
//   window.addEventListener('DOMContentLoaded', function(){
    console.log("after")
    var cy = window.cy = cytoscape({
      container: document.getElementById('cy'),

      boxSelectionEnabled: false,
      autounselectify: true,

      layout: {
        name: 'dagre'
      },

      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#11479e'
          }
        },

        {
          selector: 'edge',
          style: {
            'width': 4,
            'target-arrow-shape': 'triangle',
            'line-color': '#9dbaea',
            'target-arrow-color': '#9dbaea',
            'curve-style': 'bezier'
          }
        }
      ],

      elements: {
        nodes: [
          { data: { id: 'n0' } },
          { data: { id: 'n1' } },
          { data: { id: 'n2' } },
          { data: { id: 'n3' } },
          { data: { id: 'n4' } },
          { data: { id: 'n5' } },
          { data: { id: 'n6' } },
          { data: { id: 'n7' } },
          { data: { id: 'n8' } },
          { data: { id: 'n9' } },
          { data: { id: 'n10' } },
          { data: { id: 'n11' } },
          { data: { id: 'n12' } },
          { data: { id: 'n13' } },
          { data: { id: 'n14' } },
          { data: { id: 'n15' } },
          { data: { id: 'n16' } }
        ],
        edges: [
          { data: { source: 'n0', target: 'n1' } },
          { data: { source: 'n1', target: 'n2' } },
          { data: { source: 'n1', target: 'n3' } },
          { data: { source: 'n4', target: 'n5' } },
          { data: { source: 'n4', target: 'n6' } },
          { data: { source: 'n6', target: 'n7' } },
          { data: { source: 'n6', target: 'n8' } },
          { data: { source: 'n8', target: 'n9' } },
          { data: { source: 'n8', target: 'n10' } },
          { data: { source: 'n11', target: 'n12' } },
          { data: { source: 'n12', target: 'n13' } },
          { data: { source: 'n13', target: 'n14' } },
          { data: { source: 'n13', target: 'n15' } },
        ]
      }
    });
  }
  $("#cy").css("position","relative")
  console.log("ending")
});
//   <!-- });
