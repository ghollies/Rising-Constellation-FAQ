var planet_slots, planet_appeal, building_level
var hive_pop = [4,5.3,6.5,7.8,9]
var residential_arch_pop = [3,3.5,4,4.5,5]
var residential_arch_credit = [5,12.8,20.8,29,37.4]
var commercial_artery_credit = [2,4,6,8,10]
// console.log("loaded js  ")
function getPopulation(pop_per_building, slots) {
    return 10 + (slots * pop_per_building)
}

function getSeriesForHive() {
    var result = [];
    // console.log(planet_slots)
    var keys = [];

    for (var i = 0; i <= planet_slots; i++) {
        keys.push(i);
    }
    // console.log(keys)
    for(commercial_arteries in keys){
        // console.log("CAs "+commercial_arteries)
        var population = getPopulation(hive_pop[building_level-1], planet_slots - commercial_arteries)
        // console.log("pop: " +population)
        if(commercial_arteries>0){
        result.push(population * commercial_artery_credit[building_level-1]*commercial_arteries)
        } else {
            result.push(0)
        }
    }
        // console.log("hive: " + result)

    return result;
}

function getSeriesForResidential() {
    var result = [];
    // console.log(planet_slots)
    var keys = [];

    for (var i = 0; i <= planet_slots; i++) {
        keys.push(i);
    }
    // console.log(keys)
    for(commercial_arteries in keys){
        // console.log("CAs "+commercial_arteries)
        var population = getPopulation(residential_arch_pop[building_level-1], planet_slots - commercial_arteries)
        // console.log("pop: " +population)
        if(commercial_arteries>0){
            ca_credit=population * commercial_artery_credit[building_level-1]*commercial_arteries
            ra_credit=(planet_slots-commercial_arteries)*residential_arch_credit[building_level-1]*planet_appeal
            // console.log("ra credit "+ ra_credit)
            result.push(ca_credit+ ra_credit)
        } else {
            ra_credit=(planet_slots-commercial_arteries)*residential_arch_credit[building_level-1]*planet_appeal
            // console.log("ra credit "+ ra_credit)

            result.push(ra_credit)
        }
    }
        // console.log("RA total: "+ result)

    return result;
}


$(document).ready(function() {
    $("#slots_input").keyup(function() {
        planet_slots = $(this).val()
        refresh()
    });
    $("#appeal_input").keyup(function() {
        planet_appeal = $(this).val()
        refresh()

    });
    $("#level_input").keyup(function() {
        building_level = $(this).val()
        refresh()
    });
  })
  function refresh(){
    // console.log(planet_slots, planet_appeal, building_level)
    if(planet_slots == undefined ||  planet_appeal==undefined || building_level==undefined){
        return;
    }


    // console.log("Hive planet pop: " + getPopulation(hive_pop[building_level-1]))
    // console.log(" ra pop "+ getPopulation(residential_arch_pop[building_level-1]))
    // console.log(" ra credit "+ residential_arch_credit[building_level-1] * planet_slots)
            var title = {
               text: 'Credit for system'   
            };
            var subtitle = {
               text: 'Legacy Values'
            };
            var xAxis = {
                title: {
                  text: 'Number of Commercial Arteries'
               },
               categories: Array.from(Array(planet_slots).keys())
            };
            var yAxis = {
               title: {
                  text: 'Credits'
               },
               plotLines: [{
                  value: 0,
                  width: 1,
                  color: '#808080'
               }]
            };   
            var tooltip = {
                pointFormatter: function() {
                    var population;
                    if (this.series.index === 0) {
                     population =getPopulation(hive_pop[building_level-1], planet_slots - this.x)

                    } else{
                        var population = getPopulation(residential_arch_pop[building_level-1], planet_slots - this.x)
                    }
                    return "Credits: $"+this.y+"\n Population: "+population
                  }            
                }
            var legend = {
               layout: 'vertical',
               align: 'right',
               verticalAlign: 'middle',
               borderWidth: 0
            };
            var series =  [{
                  name: 'Hive Cities',
                  data: getSeriesForHive()
               }, 
               {
                  name: 'Residential Archipelago',
                  data: getSeriesForResidential()
               }
            ];

            var json = {};
            json.title = title;
            json.subtitle = subtitle;
            json.xAxis = xAxis;
            json.yAxis = yAxis;
            json.tooltip = tooltip;
            json.legend = legend;
            json.series = series;
            
            $('#container').highcharts(json);
        }