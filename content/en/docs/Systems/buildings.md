---
title: "Buildings"
linkTitle: "Buildings"
date: 2017-01-05
description: >
  Buildings
---
<script defer language="javascript" type="text/javascript"  src="/js/buildings.js"></script>
<style>
  [data-toggle="toggle"] {
	display: none;
}
</style>

As of 3/26/2022  Legacy 8

### Habitable Planet Buildings
<table id="habitable_table" style="width: !100%;  display: table; table-layout: auto">
	<thead>
		<tr>
      <th>Name</th><th>lv 1</th><th>lv 2</th><th>lv 3</th><th>lv 4</th><th>lv 5</th>
		</tr>
	</thead>
  </table>
  
  ### Barren Planet Buildings
  <table id="barren_table" style="width: !100%;  display: table; table-layout: auto">
	<thead>
		<tr>
      <th>Name</th><th>lv 1</th><th>lv 2</th><th>lv 3</th><th>lv 4</th><th>lv 5</th>
		</tr>
	</thead>
  </table>

  ### Orbital Buildings
  <table id="orbital_table" style="width: !100%;  display: table; table-layout: auto">
	<thead>
		<tr>
      <th>Name</th><th>lv 1</th><th>lv 2</th><th>lv 3</th><th>lv 4</th><th>lv 5</th>
		</tr>
	</thead>
	<!-- <tbody>
		<tbody class="labels">
			<tr>
				<td colspan="6" style="background-color: #b6eae4">
					<label for="o1">Industrial Hub</label>
					<input type="checkbox" name="o1" id="o1" data-toggle="toggle"/> 
				</td>
			</tr>
		</tbody>
	  <tbody class="hide" style="display: none">
      <tr><td>Production cost</td><td>300</td><td>1250</td><td>7500</td><td>15000</td><td>25000</td></tr>
      <tr><td>Credit cost</td><td>3900</td><td>8320</td><td>13520</td><td>19500</td><td>26000</td></tr>
      <tr><td>Production * {{< svg "system_prod.svg" >}} </td><td>1</td><td>1.8</td><td>2.4</td><td>3.2</td><td>3.8</td></tr>
      <tr><td>Credits * {{< svg "system_prod.svg" >}}</td><td>5</td><td>7.2</td><td>9.4</td><td>12.6</td><td>15.2</td></tr>
      <tr><td>Stability * {{< svg "system_population.svg" >}}</td><td>-.1</td><td>-.2</td><td>-.3</td><td>-.3</td><td>-.4</td></tr>
    </tbody>
  </tbody>
		<tbody class="labels">
			<tr>
				<td colspan="6" style="background-color: #b6eae4">
					<label for="management">Management</label>
					<input type="checkbox" name="management" id="management" data-toggle="toggle">
				</td>
			</tr>
		</tbody>
		<tbody class="hide">
			<tr>
				<td>Australia</td>
				<td>$7,685.00</td>
				<td>$3,544.00</td>
				<td>$5,834.00</td>
				<td>$10,583.00</td>
        <td>$10,583.00</td>
			</tr>
			<tr>
				<td>Central America</td>
				<td>$7,685.00</td>
				<td>$3,544.00</td>
				<td>$5,834.00</td>
				<td>$10,583.00</td>
        				<td>$10,583.00</td>
			</tr>
			<tr>
				<td>Europe</td>
				<td>$7,685.00</td>
				<td>$3,544.00</td>
				<td>$5,834.00</td>
				<td>$10,583.00</td>
        				<td>$10,583.00</td>
			</tr>
			<tr>
				<td>Middle East</td>
				<td>$7,685.00</td>
				<td>$3,544.00</td>
				<td>$5,834.00</td>
				<td>$10,583.00</td>
        				<td>$10,583.00</td>
			</tr>
		</tbody>		
	</tbody> -->
</table>
<!-- 
<table>
<thead>
<tr>
<th>Industrial Hub</th>
<th>lv 1</th><th>lv 2</th><th>lv 3</th><th>lv 4</th><th>lv 5</th> -->

<!-- <th>Production cost by level <br> Credit Cost by level</th> -->
<!-- </tr>
</thead>
<input type="checkbox" name="management" id="management" data-toggle="toggle">

<tbody id = "container" class="hide"> -->
<!-- <tr>
<td>Industrial Hub</td>
</tr> -->
<!-- 
<tr>
<td>Production cost</td><td>300</td><td>1250</td><td>7500</td><td>15000</td><td>25000</td>
</tr>
<tr>
<td>Credit cost</td><td>3900</td><td>8320</td><td>13520</td><td>19500</td><td>26000</td>
</tr>
<tr>
<td>Production * {{< svg "system_prod.svg" >}} </td><td>1</td><td>1.8</td><td>2.4</td><td>3.2</td><td>3.8</td>
</tr>
<tr>
<td>Credits * {{< svg "system_prod.svg" >}}</td><td>5</td><td>7.2</td><td>9.4</td><td>12.6</td><td>15.2</td>
</tr>
<tr>
<td>Stability * {{< svg "system_population.svg" >}}</td><td>-.1</td><td>-.2</td><td>-.3</td><td>-.3</td><td>-.4</td>
</tr>
</tbody>
</table> -->

<!-- 
<table>
<thead>
<tr>
<th>Name</th>
<th>Building Location</th>
<th>Production cost by level <br> Credit Cost by level</th>
</tr>
</thead>
<tbody id = "container">
<tr>
<td>Swarm of Self-Drilling Machines</td>
<td>Asteroid or Moon</td>
<td>300/1250/7500/15000/25000<br>3900/8320/13520/19500/26000</td>
</tr>
<tr>
<td>Refining Ducts</td>
<td>Asteroid or Moon</td>
<td>120/2000/20000/44000/80000<br>2000/6400/10400/15000/20000</td>
</tr>

</tbody>
</table> -->


### Monolith - Does it scale based on planet or system population?
It uses the entire system population, you can tell by the icon it uses: ![System Population](/images/system_population.png) rather than ![Planet Population](/images/planet_population.PNG)
<!-- 
### Buildings Costs

| Name | Building Location | Production cost by level <br/> Credit Cost by level |
| --- | --- | --- |
|Swarm of Self-Drilling Machines|Asteroid or Moon|300/1250/7500/15000/25000<br/>3900/8320/13520/19500/26000|
|Refining Ducts|Asteroid or Moon|120/2000/20000/44000/80000<br/>2000/6400/10400/15000/20000|
|Experiment Station|Asteroid or Moon|150/1000/10000/22000/40000<br/>6000/12800/20800/30000/40000|
|Business Arch|Asteroid or Moon|2500/10000/60000/120000/200000<br/>40000/40000/64000/104000/160000|
|Orbital Terminus|Asteroid or Moon|1600/6000/36000/72000/120000<br/>20000/32000/52000/75000/100000|
|Constellation of Lures|Asteroid or Moon|100/250/1500/3000/5000<br/>3750/8000/13000/18750/25000|
|Zero-G-Arena|Asteroid or Moon|800/3200/9600/25600/64000<br/>9900/21120/34320/49500/66000|
|O.P.U.|Asteroid or Moon|200/1500/15000/33000/60000<br/>3300/7040/11440/16500/22000|
|S-01 Assembly Line|Asteroid or Moon|400/1600/4800/12800/32000<br/>10500/17500/28000/45500/70000|
|S-02 Assembly Line|Asteroid or Moon|800/3200/9600/25600/64000<br/>15000/25000/40000/65000/100000|
|Space Dock|Asteroid or Moon|1500/6000/18000/48000/120000<br/>40000/62500/100000/162500/250000|
|Assembly Superstructure|Asteroid or Moon|3000/12000/36000/96000/240000<br/>100000/107500/172000/279500/430000|
|S.L.S.D. Network|Asteroid or Moon|360/1500/4500/12000/30000<br/>4950/10560/17160/24750/33000|
|Megapolis|Habitable|120/1000/6000/12000/20000<br/>8400/17920/29120/42000/56000|
|Residential District|Habitable|30/250/1500/3000/5000<br/>1950/4160/6760/9750/13000|
|Hive Cities|Habitable|300/1250/7500/15000/25000<br/>4500/9600/15600/22500/30000|
|Residential Archipelago|Habitable|450/3750/22500/45000/75000<br/>7500/16000/26000/37500/50000|
|Industrial Hub|Habitable|500/2750/27500/60500/110000<br/>6000/12800/20800/30000/40000|
|Orbital Link|Habitable|4000/8000/48000/96000/160000<br/>70000/112000/182000/262500/350000|
|Delta Polytech|Habitable|70/375/3750/8250/15000<br/>1500/3200/5200/7500/10000|
|Accelerator|Habitable|15000/43750/87500/175000/350000<br/>72000/90000/144000/234000/360000|
|Citadel|Habitable|120/500/5000/11000/20000<br/>1500/3200/5200/7500/10000|
|Floating Gardens|Habitable|1200/4850/14550/38800/97000<br/>15000/32000/52000/75000/100000|
|Network of Artificial Islands|Habitable|2200/9000/27000/72000/180000<br/>50000/62500/100000/162500/250000|
|Commercial Artery|Habitable|200/1500/15000/33000/60000<br/>4000/12800/20800/30000/40000|
|Reflect District|Habitable|20000/58125/116250/232500/465000<br/>140000/97500/156000/253500/390000|
|Planetary Shield|Habitable|1000/4000/12000/32000/80000<br/>11250/24000/39000/56250/75000|
|Preserved Echosystem|Habitable|12000/35000/70000/140000/280000<br/>64000/87000/130500/188500/290000|
|Orb-Intel|Habitable|7500/18750/37500/75000/150000<br/>18750/40000/65000/93750/125000|
|Convention Center|Habitable|10000/2250/22500/49500/90000<br/>4800/10240/16640/24000/32000|
|Central Hub|Sterile|130/1100/6600/13200/22000<br/>9000/19200/31200/45000/60000|
|Array of Excavators|Sterile|200/1000/6000/12000/20000<br/>1950/4160/6760/9750/13000|
|Capsule Cities|Sterile|200/1000/6000/12000/20000<br/>3450/7360/11960/17250/23000|
|Metamaterials Factory|Sterile|30000/60000/120000/240000/480000<br/>180000/150000/240000/390000/600000|
|Space Elevator|Sterile|1500/6000/18000/48000/120000<br/>22500/48000/78000/112500/150000|
|Impact Research Station|Sterile|250/1750/17500/38500/70000<br/>3750/8000/13000/18750/25000|
|Holodome|Sterile|2000/8100/24300/64800/162000<br/>3000/6400/10400/15000/20000|
|Monolith|Sterile|20000/58750/117500/235000/470000<br/>160000/105000/168000/273000/420000|
|Omnimarket|Sterile|150/1125/11250/24750/45000<br/>8000/16000/26000/37500/50000|
|Industrial Spaceport|Sterile|1400/5500/16500/44000/110000<br/>9000/19200/31200/45000/60000|
|C.N.D.|Sterile|5000/15000/30000/60000/120000<br/>19500/41600/67600/97500/130000|
|Interception Tunnels|Sterile|800/3100/9300/24800/62000<br/>9750/20800/33800/48750/65000|
|Hyperdrive Circuit|Sterile|600/2400/7200/19200/48000<br/>20250/43200/70200/101250/135000|
|Aerospace Military Academy|Sterile|6000/17500/35000/70000/140000<br/>19500/41600/67600/97500/130000|
|Integrated Proxy Systems|Sterile|250/1875/18750/41250/75000<br/>4050/8640/14040/20250/27000| -->