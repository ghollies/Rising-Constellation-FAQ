 ---
title: "Patents"
date: 2017-01-05
weight: 4
description: >
  What Patents exist?
---
<script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.2.17/cytoscape.min.js">   </script>
<script src="https://unpkg.com/dagre@0.7.4/dist/dagre.js"></script>
<script src="https://cdn.rawgit.com/cytoscape/cytoscape.js-dagre/1.5.0/cytoscape-dagre.js"></script>
<!-- <script defer language="javascript" type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.20.0/cytoscape.umd.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dagre/0.8.5/dagre.js" integrity="sha512-ZtfUn3lEO+lgQZPdTn8PHFFJVaXWfiMZGR2Nrl5tCKKVk+qXysk+H7OFjL/96oVNvO5mvrrT7WOWWBueYPfpIQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdn.rawgit.com/cytoscape/cytoscape.js-dagre/1.5.0/cytoscape-dagre.js"></script> -->
<!-- <script defer language="javascript" type="text/javascript" src="https://cdn.jsdelivr.net/npm/cytoscape-dagre@2.3.2/cytoscape-dagre.min.js"></script> -->
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.5/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/cytoscape-popper@1.0.2/cytoscape-popper.min.js"></script>
<script defer language="javascript" type="text/javascript" src="/js/patentTree.js"></script>

As of 3/26/2022  Legacy 8

<div>
    <style>
      /* body {
        font-family: helvetica;
        font-size: 14px;
      } */
      #cy {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 999;
      }
      /* h1 {
        opacity: 0.5;
        font-size: 1em;
      } */
    </style>
<div id="multiplier">Cost Multiplier: 100%</div>
<div id="spent">Total Spent: 0</div>
<div id="cy"></div>
</div>
