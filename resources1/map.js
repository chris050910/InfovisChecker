
      d3.json("resources1/lynchings.json", function(err, data) {
        console.log("err, data", err, data)


        var StringHeader=".sideBox";
        var StringPop=".population";





      var map = new Datamap({
        scope: 'usa',
        element: document.getElementById('map'),
        geographyConfig:{
          highlightBorderColor: '#bada55',
          popupTemplate: function(geography, data){
            var geographyState=geography.properties.name;
            return d3.select(StringHeader).html('<h1>'+geographyState+'</h1>'
                                              +'<img width="100%" src='+data.Flag+'>'
          );

          },
        },

        height: 600,
        fills: {
          'none': '#999999',
          'White': '#d15742',
          'Black': '#306596',
          'Flag': '#306596',
        },

        data: data
      })

       //keep this code
     map.bubbles([ ], {
       popupTemplate: function(geography, data) {
         return "<div class='hoverinfo'>It is " + data.name + "</div>";
       }
     });
/*
     var ordinal = d3.scale.ordinal()
       .domain(["white", "black", "none"])
       .range([ "rgb(204,71,49)", "rgb(48,101,150)", "rgb(153,153,153"]);

       var svg = d3.select("svg");

       svg.append("g")
       .attr("class", "legendOrdinal")
       .attr("transform", "translate(450,450)");

       var legendOrdinal = d3.legend.color()
       .shape("path", d3.svg.symbol().type("triangle-up").size(150)())
       .shapePadding(10)
       .scale(ordinal);

       svg.select(".legendOrdinal")
       .call(legendOrdinal);*/

      })
