var fns = {
    a0 : [0.6,5,30,60,100],
    b0:[0.25,2.5,25,55,100],
    c0:[1.2,5,15,40,100],
    d0:[6.25,12.5,25,50,100],
    e0:[15,32,52,75,100],
    f0:[20,30,45,65,100],
    g2:[12.5,25,40,65,100],

    l2:[0,25,50,75,100], // linear

 // need to derive
    l0:[0,25,50,75,100] , // same linear
    f2:[15,30,45,65,100], // derived using Experiment Station
    e2:[20,32,52,75,100], // derived from Swarm of Self-Drilling Machines
    s2:[33,60,80,90,100], // from Refining Ducts
}


// 10500	77000
// 10500,___,  43750 60375 77000
//:factory_orbital,Refining Ducts,Y,:orbital,:normal,:industrial,:none,1,"[:prod :credit]",:orbital_credit,5,120,72000,b0,2000,22000,e0,:body_ind,:sys_production,1,3,s2,:body_ind,:sys_credit,5,12,s2,,,,,,,,,,
// 1 1.8 2.4 2.7
// 5 7.2 9.6 10.8

//:mine_orbital,Swarm of Self-Drilling Machines,Y,:orbital,:normal,:industrial,:none,1,[:prod],:orbital_prod,5,300,22500,a0,3900,28600,e0,:body_ind,:sys_production,3,15,e2,,,,,,,,,,,,,,,
// 3 4.8 7.8 11.3 15
// :research_orbital,Experiment Station,Y,:orbital,:normal,:industrial,:unique_body,1,[:tech],:orbital_research,5,150,36000,b0,6000,44000,e0,:body_tec,:sys_technology,0.6,4,f2,,,,,,,,,,,,,,,
// .6 1.2 1.8 2.6 4
// Name: "Megapolis"
// b1 f(): "l2"
// b1 input: ":direct"
// b1 max: "10"
// b1 min: "10"
// b1 output: ":sys_habitation"
// b2 f(): "l2"
// b2 input: ":direct"
// b2 max: "10"
// b2 min: "2"
// b2 output: ":sys_happiness"
// b3 f(): ""
// b3 input: ""
// b3 max: ""
// b3 min: ""
// b3 output: ""
// b4 f(): ""
// b4 input: ""
// b4 max: ""
// b4 min: ""
// b4 output: ""
// biome: ":open"
// cf(): "e0"
// cma: "61600"
// cmin: "8400"
// display: ":infrastructure"
// illu: "Y"
// key: ":infra_open"
// level: "5"
// limitation: ":unique_body"
// outputs: "\"[:hab :happiness]\""
// patent: ":infra_open_1"
// pf(): "a0"
// pmax: "18000"
// pmin: "120"
// type: ":infrastructure"
// workforce: "2"
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
":direct":"1"
}

function getIcon(image){
//   console.log(image)
  imageFile= iconMap[image]
  
  if(!imageFile.includes(".svg")){
      return imageFile
  }
  return  `<img style="background:black" src="/images/svg/${imageFile}"/>`
}
var data1
$.getJSON('/Rising-Constellation-FAQ/building-full.json', function(dataRaw) {
    data = dataRaw.sort( (a,b) =>  a.Name < b.Name? -1:1);
    data1=data
    // console.log(data[0])
    i=0
    for (const i in data) {
        // console.log("building " + data[i].Name)
        currentFn = data[i]["pf()"]
        prodCosts = fns[currentFn].map(item => {
            if(currentFn == "l2" || currentFn == "l0" ){
                diff = data[i]["pmax"] - data[i]["pmin"]
                ret = Number(data[i]["pmin"]) + (item * diff *.01)
                return  ret.toFixed(0)
            }
             return item * data[i].pmax * .01}
             )
        prodCosts[0]=Number(data[i].pmin)

        currentFn = data[i]["cf()"]
        creditCosts = fns[currentFn].map(item => { 
            if(currentFn == "l2" || currentFn == "l0" ){
                diff = data[i]["cma"] - data[i]["cmin"]
                ret = Number(data[i]["cmin"]) + (item * diff *.01)
                return  ret.toFixed(0)
            }
            return item * data[i].cma * .01
        })
        creditCosts[0]=Number(data[i].cmin)

        currentFn = data[i]["b1 f()"]
        b1 = fns[currentFn].map(item => { 
            if(currentFn == "l2" || currentFn == "l0" ){
                diff = data[i]["b1 max"] - data[i]["b1 min"]
                ret = Number(data[i]["b1 min"]) + (item * diff *.01)
                return  ret.toFixed(1)
            }
            return (item *Number( data[i]["b1 max"]) * .01).toFixed(1)
        })
        b1[0] = data[i]["b1 min"]
        b1Line = `<tr><td>+${getIcon(data[i]["b1 output"])}  =  ${getIcon(data[i]["b1 input"])} * </td><td>${b1[0]}</td><td>${b1[1]}</td><td>${b1[2]}</td><td>${b1[3]}</td><td>${b1[4]}</td></tr>`
        currentFn = data[i]["b2 f()"]
        if(currentFn != ''){
            b2 = fns[currentFn].map(item => { 
                if(currentFn == "l2" || currentFn == "l0" ){
                    diff = data[i]["b2 max"] - data[i]["b2 min"]
                    // console.log("diff " + diff)
                    // console.log("item " + item)
                    ret = Number(data[i]["b2 min"]) + (item * diff *.01)
                    // console.log("ret " + ret)

                    return  ret.toFixed(1)
                }
                return (item *Number( data[i]["b2 max"]) * .01).toFixed(1)
            })
            b2[0] = data[i]["b2 min"]
            b2Line=`<tr><td>+${getIcon(data[i]["b2 output"])}  =  ${getIcon(data[i]["b2 input"])} * </td><td>${b2[0]}</td><td>${b2[1]}</td><td>${b2[2]}</td><td>${b2[3]}</td><td>${b2[4]}</td></tr>`
         } else {
             b2Line =""
         }
        currentFn = data[i]["b3 f()"]
        if(currentFn != ''){
            b3 = fns[currentFn].map(item => { 
                if(currentFn == "l2" || currentFn == "l0" ){
                    diff = data[i]["b3 max"] - data[i]["b3 min"]
                    // console.log("diff " + diff)
                    // console.log("item " + item)
                    ret = Number(data[i]["b3 min"]) + (item * diff *.01)
                    // console.log("ret " + ret)

                    return  ret.toFixed(1)
                }
                return (item *Number( data[i]["b3 max"]) * .01).toFixed(1)
            })
            b3[0] = data[i]["b3 min"]
            b3Line = `<tr><td>+${getIcon(data[i]["b3 output"])}  =  ${getIcon(data[i]["b3 input"])} * </td><td>${b3[0]}</td><td>${b3[1]}</td><td>${b3[2]}</td><td>${b3[3]}</td><td>${b3[4]}</td></tr> `
        } else {
            b3Line = ""
        }

        currentFn = data[i]["b4 f()"]
        if(currentFn != ''){
            b4 = fns[currentFn].map(item => { 
                if(currentFn == "l2" || currentFn == "l0" ){
                    diff = data[i]["b4 max"] - data[i]["b4 min"]
                    // console.log("diff " + diff)
                    // console.log("item " + item)
                    ret = Number(data[i]["b4 min"]) + (item * diff *.01)
                    // console.log("ret " + ret)

                    return  ret.toFixed(1)
                }
                return (item *Number( data[i]["b4 max"]) * .01).toFixed(1)
            })
            b4[0] = data[i]["b4 min"]
            b4Line = `<tr><td>+${getIcon(data[i]["b4 output"])}  =  ${getIcon(data[i]["b4 input"])} * </td><td>${b4[0]}</td><td>${b4[1]}</td><td>${b4[2]}</td><td>${b4[3]}</td><td>${b4[4]}</td></tr> `
        } else {
            b4Line = ""
        }
        // 96c7f0
        // bee3f6
        targetTable = ""
        if(data[i].biome == ":open"){
            targetTable = "habitable_table"
        }
        if(data[i].biome == ":dome"){
            targetTable = "barren_table"
        }
        if(data[i].biome == ":orbital"){
            targetTable = "orbital_table"
        }
        mod = $(`#${targetTable}`).children().length%2
        $(`#${targetTable}`).append(`
        <tbody>
        <tbody class="labels">
            <tr>
                <td colspan="6" style="background-color: #${ mod == 0 ? "96c7f0" : "bee3f6"}">
                    <label style="font-weight: bold" for="o${i}">${data[i].Name}</label>
                    <input type="checkbox" name="o${i}" id="o${i}" data-toggle="toggle"/> 
                </td>
            </tr>
        </tbody>
    <tbody class="hide" style="display: none">
    <tr><td>Production cost</td><td>${prodCosts[0]}</td><td>${prodCosts[1]}</td><td>${prodCosts[2]}</td><td>${prodCosts[3]}</td><td>${prodCosts[4]}</td></tr>
    <tr><td>Credit cost</td><td>${creditCosts[0]}</td><td>${creditCosts[1]}</td><td>${creditCosts[2]}</td><td>${creditCosts[3]}</td><td>${creditCosts[4]}</td></tr>
    ${b1Line}
    ${b2Line}
    ${b3Line}
    ${b4Line}

    </tbody>
    </tbody>
        `);
    }

    $('[data-toggle="toggle"]').change(function(){
		$(this).parents().next('.hide').toggle();
	});
});

// $(document).ready(function() {

// });

{/* <tr><td>Production * {{< svg "system_prod.svg" >}} </td><td>1</td><td>1.8</td><td>2.4</td><td>3.2</td><td>3.8</td></tr>
<tr><td>Credits * {{< svg "system_prod.svg" >}}</td><td>5</td><td>7.2</td><td>9.4</td><td>12.6</td><td>15.2</td></tr>
<tr><td>Stability * {{< svg "system_population.svg" >}}</td><td>-.1</td><td>-.2</td><td>-.3</td><td>-.3</td><td>-.4</td></tr> */}