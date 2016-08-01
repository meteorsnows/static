'use strict';

(function($){

  $(function() {

var datascource = {
  'name': 'Lao Lao',
  'title': 'general manager',
  'children': [
    
  ]
};

var countTree = 1;
var topTree = 1;
var nextCount = 0;
for(var i=1; i <= topTree;i++){

  

  var secondGen = { 'name': 'Bo Miao'+i, 'title': 'department manager',
      'children': []
    };
  var thirdGen = [];

  nextCount = 1 + (i * countTree);
  
  for(var j = nextCount ; j < (nextCount+countTree); j++){
    var obj = {'name': null, 'title': null};
    obj.name = 'people_' +j;
    obj.title = 'people_' + j;
    thirdGen.push(obj)
  }
  secondGen.children = thirdGen
  datascource.children.push(secondGen);

}

    $('#chart-container').orgchart({
      'data' : datascource,
      'nodeContent': 'title',
      'draggable': true,
      'pan': false,
      'zoom': false,
      'dropCriteria': function($draggedNode, $dragZone, $dropZone) {
        if($draggedNode.find('.content').text().indexOf('manager') > -1 && $dropZone.find('.content').text().indexOf('engineer') > -1) {
          return false;
        }
        return true;
      }
    })
    .children('.orgchart').on('nodedropped.orgchart', function(event) {
      console.log('draggedNode:' + event.draggedNode.children('.title').text()
        + ', dragZone:' + event.dragZone.children('.title').text()
        + ', dropZone:' + event.dropZone.children('.title').text()
      );
    });

  });

})(jQuery);