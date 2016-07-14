
(function(){
	'use strict'

angular.module("play.filterData", []);

angular.module('play.filterData').controller('filterDataCtrl', ['$scope', function($scope){
	console.log("inside Filter controller.");
	
	$scope.datas = [{"Name" : "pk", "city":"thn"},
	             {"Name" : "pk1", "city":"thn1", "Date": "5 Apr 2016"},
	             {"Name" : "pk2", "city":"thn2", "Date": "6 Apr 2016"},
	             {"Name" : "pk3", "city":"thn3", "Date": "7 Apr 2016"},
	             {"Name" : "pk4", "city":"thn4", "Date": "8 Apr 2016"},
	             {"Name" : "pk5", "city":"thn5", "Date": "9 Apr 2016"},
	             {"Name" : "pk6", "city":"thn6", "Date": "10 Apr 2016"},
	             {"Name" : "pk7", "city":"thn7", "Date": "11 Apr 2016"},
	             {"Name" : "pk8", "city":"thn8", "Date": "12 Apr 2016"},
	             {"Name" : "pk9", "city":"thn9", "Date": "13 Apr 2016"}];
	
	
	$scope.desktopData = [{
        "Date": "05 Apr 2016",
        "children": [{
                "name": 'Appels',
                "icon": "earphone",
                "children": [{
                        "hour": "18:09 ",
                        "number": "+442084459876",
                        "time": "00:03:54",
                        "costicon": "",
                        "cost": "+2,05\u20ac"
                    }, {
                        "hour": "18:20",
                        "number": "+447765896321",
                        "time": "00:00:34",
                        "cost": "Inclus"
                    }, {
                        "hour": "00:40",
                        "number": "+442084459876",
                        "time": "00:00:34",
                        "cost": "Inclus"
                    }, {
                        "hour": "17.37",
                        "number": "+447765896321",
                        "time": "00:00:34",
                        "costicon": "globe",
                        "cost": "+4590,80\u20ac"
                    }, {
                        "hour": "17.37",
                        "number": "+447765896321",
                        "time": "00:00:34",
                        "costicon": "",
                        "cost": "Inclus"
                    }

                ]

            }, {
                "name": 'SMS',
                "icon": "earphone",
                "children": [{
                    "hour": "18:09 ",
                    "number": "+442084459876",
                    "time": "00:03:54",
                    "costicon": "globe",
                    "cost": "+2,05\u20ac"
                }, {
                    "hour": "18:20",
                    "number": "+447765896321",
                    "time": "00:00:34",
                    "cost": "Inclus"
                }, {
                    "hour": "00:40",
                    "number": "+442084459876",
                    "time": "00:00:34",
                    "cost": "Inclus"
                }]

            }, {
                "name": 'Internet',
                "icon": "globe",
                "children": [{
                    "hour": "18:09 ",
                    "number": "",
                    "time": "00:03:54",
                    "costicon": "",
                    "cost": "+2,05\u20ac"
                }, {
                    "hour": "18:20",
                    "number": "",
                    "time": "00:00:34",
                    "cost": "Inclus"
                }, {
                    "hour": "00:40",
                    "number": "",
                    "time": "00:00:34",
                    "cost": "Inclus"
                }, {
                    "hour": "17.37",
                    "number": "",
                    "time": "00:00:34",
                    "costicon": "globe",
                    "cost": "+4590,80\u20ac"
                }]

            }

        ]

    }, {
        "Date": "09 Apr 2016",
        "children": [{
            "name": 'Appels',
            "icon": "earphone",
            "children": [{
                "hour": "18:09 ",
                "number": "+442084459876",
                "time": "00:03:54",
                "costicon": "",
                "cost": "+2,05\u20ac"
            }, {
                "hour": "18:20",
                "number": "+447765896321",
                "time": "00:00:34",
                "costicon": "globe",
                "cost": "Inclus"
            }, {
                "hour": "00:40",
                "number": "+442084459876",
                "time": "00:00:34",
                "costicon": "",
                "cost": "Inclus"
            }]

        }, {
            "name": 'SMS',
            "icon": "earphone",
            "children": [{
                "hour": "18:09 ",
                "number": "+442084459876",
                "time": "00:03:54",
                "costicon": "",
                "cost": "+2,05\u20ac"
            }, {
                "hour": "18:20",
                "number": "+447765896321",
                "time": "00:00:34",
                "costicon": "",
                "cost": "Inclus"
            }, {
                "hour": "00:40",
                "number": "+442084459876",
                "time": "00:00:34",
                "costicon": "globe",
                "cost": "Inclus"
            }]

        }, {
            "name": 'Internet',
            "icon": "globe",
            "children": [{
                "hour": "18:09 ",
                "number": "",
                "time": "00:03:54",
                "costicon": "",
                "cost": "+2,05\u20ac"
            }, {
                "hour": "18:20",
                "number": "",
                "time": "00:00:34",
                "costicon": "",
                "cost": "Inclus"
            }, {
                "hour": "00:40",
                "number": "",
                "time": "00:00:34",
                "costicon": "globe",
                "cost": "Inclus"
            }]

        }]

    }];
}])


//export default angular.module("play.filterData", [])
   
// Reference for range filter : 
// http://stackoverflow.com/questions/35080746/filter-ng-repeat-on-range-slider-angular-js

.filter("dateFilter", function(){
     return function(items, startDate, endDate) {

        /*console.log(dudate+ " "+  audate);
         var startdate = parseDate(dudate);
         var enddate = parseDate(audate);

         var arrayToReturn = [];       
         var itemarray= [];

       console.log("items == "+items);
         //angular.forEach(items[0], function(value, key) {         
       angular.forEach(items, function(value, key) {
             var tf = parseDate(value.Date);

             console.log("tf === "+tf);
             if (tf > startdate && tf < enddate) {
                itemarray['Date'] = value;
                 arrayToReturn.push(itemarray);
                
                
             }
         });
       
         return arrayToReturn;*/
    	 console.log("startDate == "+startDate);
    	 console.log("endDate == "+endDate);
    	 return items.filter(function(item){
	       console.log(item.Date);
	       return (parseDate(item.Date) >= parseDate(startDate) && parseDate(item.Date) <= parseDate(endDate));
	     });

    	 //return items.filter((item) => (parseDate(item.Date) > rangeInfo.min && item.price < rangeInfo.max));

     };
 });

 function parseDate(input) {
	 //console.log("input before conversion == "+input);
     //converting date string to number for comparing 
     return Date.parse(input);
 };
 
	
}());