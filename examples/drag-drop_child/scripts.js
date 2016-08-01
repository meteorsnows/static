'use strict';

(function($){

  $(function() {

    var datascource = {
      'name': 'Lao Lao',
      'title': 'general manager',
      'children': [
        { 'name': 'Bo Miao', 'title': 'department manager'

        },
        { 'name': 'Su Miao', 'title': 'department manager'
        }
      ]
    };

    $('#chart-container').orgchart({
      'data' : datascource,
      'nodeContent': 'title',
      'draggable': true,
      'dropCriteria': function($draggedNode, $dragZone, $dropZone) {
        console.log($draggedNode)
        console.log($dropZone)
        if($draggedNode.find('.content').text().indexOf('manager') > -1 && $dropZone.find('.content').text().indexOf('engineer') > -1) {

          /*
          if($draggedNode != $dropZone){


          return false;
          }
          */

        if($offsetTop[0].offsetTop == 0){
          return false;

        }



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