$(document).ready(function() {


   var $calendar = $('#calendar');
   var id = 10;
   var d ;
   $calendar.weekCalendar({//This will display the weekly calendar but in order to display some calendar events, we need to add them. Events can be supplied via an array of CalEvent objects which are described below. What�s probably more useful would be to supply a url or function that calls back to the calendar after fetching some json data. To keep it simple though, for this example we�ll simply use a json object to demonstrate:
      date : new Date(2011,3,10) ,
      timeslotsPerHour : 4,
      allowCalEventOverlap : true,
      overlapEventsSeparate: true,
      firstDayOfWeek : 7,
      daysToShow : 3,
      //readonly : function($calendar) {
      //  $calendar.weekCalendar({readonly : false});
      //},
      
      businessHours :{start: 8, end: 18, limitDisplay: true},
    
      height : function($calendar) {
         return $(window).height() - $("h1").outerHeight() - 1;
      },
      eventRender : function(calEvent, $event) {
         //if (calEvent.end.getTime() < new Date().getTime()) {
           // $event.css("backgroundColor", "#aaa");
           // $event.find(".wc-time").css({
             //  "backgroundColor" : "#999",
             //  "border" : "1px solid #888"
            //});
         //}
      },
      draggable : function(calEvent, $event) {
         return calEvent.readOnly != true;
      },
      resizable : function(calEvent, $event) {
         return calEvent.readOnly != true;
      },
      eventNew : function(calEvent, $event) {
       // return  ;




      if ( (new Date( $calendar.weekCalendar("formatDate", calEvent.start) ).getTime() >= new Date(2011,03,10).getTime() ) && (new Date( $calendar.weekCalendar("formatDate", calEvent.start) ).getTime() <= new Date(2011,03,12).getTime() ) )
         {
         

          var $dialogContent = $("#event_edit_container");
          resetForm($dialogContent);
        // var startField = $dialogContent.find("select[name='start']").val(calEvent.start);
        // var endField = $dialogContent.find("select[name='end']").val(calEvent.end);
          var startField = calEvent.start;// added by sandeep
          var endField =calEvent.end;// added by sandeep
          var titleField = $dialogContent.find("input[name='title']");
          var locationField = $dialogContent.find("input[name='location']");// added by sandeep
         //alert ("ss"+ startField)

        
         
 

          //FCKeditorAPI.GetInstance('body').SetHTML(<p>bbbb</p>);
          //var bodyField = $dialogContent.find("textarea[name='body']");
          //var bodyField = FCKeditorAPI.GetInstance('body').GetHTML(true) ;
          //alert(bodyField)

    

         $dialogContent.dialog({
            modal: true,
            title: "New Calendar Event",
            close: function() {//alert("dd")
               $dialogContent.dialog("destroy");
               $dialogContent.hide();
               $('#calendar').weekCalendar("removeUnsavedEvents");
            },
            buttons: {
               "Create Agenda" : function() {
              
      







                  calEvent.id = id;
                  id++;
              //   calEvent.start = new Date(startField.val());
               //  calEvent.end = new Date(endField.val());

                 calEvent.start = new Date(startField);// added by sandeep
                 calEvent.end = new Date(endField);// added by sandeep
                 calEvent.title = titleField.val();
                 calEvent.location = locationField.val();
                 calEvent.body  = FCKeditorAPI.GetInstance('body').GetHTML(true) ;
               



                     var error=''

                     var flag=false;



               if(  titleField.val()==""  )
                 {  error+='Title, ';
                    flag=true;
                 }
                   if( locationField.val()==""  )
                 {  error+='Location, ';
                    flag=true;
                 }
                 if( calEvent.body==""  )
                 {  error+='Body ';
                    flag=true;
                 }
                 error+='can not be blank !';
                     //var error=''

                     //var flag=false;
                     //|| (titleField.val()=="") || (calEvent.body=="")

                    //if(getElementById('').value!=''){
                    //  error+='massage'
                  // flag=true;
                         


                    if(flag){

                      alert(error);
                      return false;
                     }else{

                    




                     
                  

//                     if(titleField.val()==""){
//                                    // $.post('/calendars/title',{},function(html) { $("#title").append(html); });
//
//                                      alert("Title can not be blank !" );
//                                      return;
//                                            }
//
//                    if(locationField.val()==""){
//                                    //$.post('/calendars/location',{},function(html) { $("#location").append(html); });
//                                    alert("Location can not be blank !" );
//                                    return;
//
//                                    }
//                    if(calEvent.body==""){
//                                    //$.post('/calendars/bodyf',{},function(html) { $("#bodyf").append(html); });
//                                   alert("Body can not be blank !" );
//                                    return;
//
//                                     }


                 //}





                 //calEvent.body =bodyField.val();
                 //alert (bodyField.val());
                // alert ("end"+calEvent.end );
                 //alert ($calendar.weekCalendar("formatTime", calEvent.end))
                 //alert ($calendar.weekCalendar("formatDate", calEvent.start))

    $.post('/calendars/cevent',{start: startField,end: endField,title:titleField.val(),body:FCKeditorAPI.GetInstance('body').GetHTML(),location:locationField.val()},function(data) { });
/* I can use this also to show success message
   $.ajax({
                                   type: "POST",
                                   url: "acaoConsultBlocks.php?acao=01",
                                   data: "start="+calEvent.start+"&end="+calEvent.end
+"&body="+calEvent.body+"&medicalarea="+medicalarea
+"&medicalsubarea="+medicalsubarea+"&city="+city
+"&event_type="+event_type,
                                   success: function(msg){
                                         if(msg==0)
                                         {
                                                var $dialogContent = $("#event_edit_container");
                                        resetForm($dialogContent);
                                                alert("Could not add event at the moment.try again!");
                                         }
                                         else
                                         {
                                                alert("Event has been added successfully");
                                         }
                                        }
                                  });
 

 */

                  $calendar.weekCalendar("removeUnsavedEvents");
                  $calendar.weekCalendar("updateEvent", calEvent);
                  $dialogContent.dialog("close");}
               },
               cancel : function() {
              // $.post('/calendars/devent',{},function(json){alert (json);});

                $dialogContent.dialog("close");
               }
            }
         }).show();

  

         $dialogContent.find(".date_holder").text($calendar.weekCalendar("formatDate", calEvent.start));
         //setupStartAndEndTimeFields(startField, endField, calEvent, $calendar.weekCalendar("getTimeslotTimes", calEvent.start));

      }
        else{  //alert ("This is ReadOnly");
             $calendar.weekCalendar('refresh');
          //  $calendar.weekCalendar("removeEvent", calEvent.id);

            return;

            }
      }
      ,
      eventDrop : function(calEvent, $event) {
         if ( (new Date( $calendar.weekCalendar("formatDate", calEvent.start) ).getTime() >= new Date(2011,03,10).getTime() ) && (new Date( $calendar.weekCalendar("formatDate", calEvent.start) ).getTime() <= new Date(2011,03,12).getTime() ) )
            {
                
              $.post('/calendars/uevent',{id:calEvent.id,start: calEvent.start,end: calEvent.end,title:calEvent.title,body:calEvent.body,location:calEvent.location},function(data) { });
                
            }
           else{
               alert ("You are Droping in prohibited area !");
               $calendar.weekCalendar('refresh');
               // $calendar.weekCalendar("removeUnsavedEvents");
               //$calendar.weekCalendar("removeEvent", calEvent.id);
               return;
           }

          },
      eventResize : function(calEvent, $event) {
          alert ("You are Resizing the event")
         $.post('/calendars/uevent',{id:calEvent.id,start: calEvent.start,end: calEvent.end,title:calEvent.title,body:calEvent.body,location:calEvent.location},function(data) { });



             


},
      eventClick : function(calEvent, $event) {

         if (calEvent.readOnly) {
            return;
         }

         var $dialogContent = $("#event_edit_container");
         resetForm($dialogContent);
        // var startField = $dialogContent.find("select[name='start']").val(calEvent.start);
        // var endField = $dialogContent.find("select[name='end']").val(calEvent.end);
         var startField = calEvent.start ;     // Addded by sandeeep
         var endField = calEvent.end ;          //Addded by sandeeep

         var titleField = $dialogContent.find("input[name='title']").val(calEvent.title);
         var locationField = $dialogContent.find("input[name='location']").val(calEvent.location);
         var bodyField = $dialogContent.find("textarea[name='body']").val(calEvent.body);
         //FCKeditor_OnComplete(calEvent.body);




         //alert ("BODY"+calEvent.body);
      
       //alert (calEvent.location)
       // bodyField.val(calEvent.body);


                                          //  alert(startField +"1" +endField +"1" +titleField.val() +"1" +locationField.val()) // Added by sandeep



        $dialogContent.dialog({
            modal: true,
            title: "Edit - " + calEvent.title,
            close: function() {
               $dialogContent.dialog("destroy");
               $dialogContent.hide();
               $('#calendar').weekCalendar("removeUnsavedEvents");
            },
            buttons: {
               "Edit Agenda" : function() {
                



                  calEvent.start = new Date(startField);
                  calEvent.end = new Date(endField);
                  calEvent.title = titleField.val();
                  calEvent.location = locationField.val();
                  calEvent.body = FCKeditorAPI.GetInstance('body').GetHTML(true) ;


 $.post('/calendars/uevent',{id:calEvent.id,start: startField,end: endField,title:titleField.val(),body:FCKeditorAPI.GetInstance('body').GetHTML(),location:locationField.val()},function(data) { });


                  $calendar.weekCalendar("updateEvent", calEvent);
                  $dialogContent.dialog("close");
               },
               "delete" : function() {


                 $.post('/calendars/dlevent',{id:calEvent.id},function(data) { });







                  /*
                   *          "delete" : function() {

                                  calEvent.start = new Date(startField.val());
                  calEvent.end = new Date(endField.val());
                  //calEvent.title = titleField.val();
                  calEvent.body = bodyField.val();
                                  calEvent.idField = idField.val();
                                  calEvent.event_type   = eventtypeField.val();

                                  if(confirm("Are you sure to delete this event?"))
                                  {
                                   $.ajax({
                                           type: "POST",
                                           url: "acaoConsultBlocks.php?acao=04",
                                           data: "event_id="+calEvent.idField,
                                           success: function(msg){
                                                   alert("event deleted");
                                                   $calendar.weekCalendar("removeEvent", calEvent.idField);
                                           }
                                   });
                                  }
                                  $calendar.weekCalendar('refresh');
                                  $dialogContent.dialog("close");
               }
                   
                   
                   */



                  $calendar.weekCalendar("removeEvent", calEvent.id);
                  $dialogContent.dialog("close");
               },
               cancel : function() {
                


                  $dialogContent.dialog("close");
               }
            }
         }).show();

            // var startField = $dialogContent.find("select[name='start']").val(calEvent.start);
             //var endField = $dialogContent.find("select[name='end']").val(calEvent.end);
         $dialogContent.find(".date_holder").text($calendar.weekCalendar("formatDate", calEvent.start));
       //  setupStartAndEndTimeFields(startField, endField, calEvent, $calendar.weekCalendar("getTimeslotTimes", calEvent.start));
         $(window).resize().resize(); //fixes a bug in modal overlay size ??
             //alert ("sssssssss");
      },
      eventMouseover : function(calEvent, $event) {
     // alert("dddd");

         },
      eventMouseout : function(calEvent, $event) {

       // alert("dddd");
        },
      noEvents : function() {

      },
      data : function(start, end, callback) {
           //d = getEventData();

    //alert (getEventData());
  //  callback(getEventData());
         //alert (start.getTime())
          callback(getEventData());
             


                     }
   });

   function resetForm($dialogContent) {
      $dialogContent.find("input").val("");
      $dialogContent.find("textarea").val("");
//  $dialogContent.find("textarea[name='body']").val("");

 }

   function getEventData() {
     //var year = new Date().getFullYear();
     // var month = new Date().getMonth();
      //var day = new Date().getDate();
var jsonObj='';

  $.ajax({
        url:        "/calendars/devent",
        type:       "post",
        dataType:   "json",
        async:false,
        success:    function(json) {
                                              //callback( json );
                                alert("here"+json);

          jsonObj=json;
        }



    });

//var jsonObj=$("#TempContainerJson").html();
//alert("test"+jsonObj);
  // return {events :jsonObj };

//alert("I am Outside Ajax"+jsonObj);
return {events :jsonObj}

     
   }

//function ReturnEventData(){

 //  var jsonObj=$("#TempContainerJson").html();
//alert("test"+jsonObj);
  // return {events :jsonObj };


 //  }

   /*
    * Sets up the start and end time fields in the calendar event
    * form for editing based on the calendar event being edited
    */


 function FCKeditor_OnComplete( body )
{   //body.SetHTML(<p>body</p>);
     //lert( body.Name ) ;
  oFCKeditor.value=body;

  alert("check"+oFCKeditor.value);

}





  function setupStartAndEndTimeFields($startTimeField, $endTimeField, calEvent, timeslotTimes) {

      for (var i = 0; i < timeslotTimes.length; i++) {
         var startTime = timeslotTimes[i].start;
         var endTime = timeslotTimes[i].end;
         var startSelected = "";
         if (startTime.getTime() === calEvent.start.getTime()) {
            startSelected = "selected=\"selected\"";
         }
         var endSelected = "";
         if (endTime.getTime() === calEvent.end.getTime()) {
            endSelected = "selected=\"selected\"";
         }
         $startTimeField.append("<option value=\"" + startTime + "\" " + startSelected + ">" + timeslotTimes[i].startFormatted + "</option>");
         $endTimeField.append("<option value=\"" + endTime + "\" " + endSelected + ">" + timeslotTimes[i].endFormatted + "</option>");

      }
      $endTimeOptions = $endTimeField.find("option");
      $startTimeField.trigger("change");
   }

   var $endTimeField = $("select[name='end']");
   var $endTimeOptions = $endTimeField.find("option");

   //reduces the end time options to be only after the start time options.
   $("select[name='start']").change(function() {alert("ddddd");
      var startTime = $(this).find(":selected").val();
      var currentEndTime = $endTimeField.find("option:selected").val();
      $endTimeField.html(
            $endTimeOptions.filter(function() {
               return startTime < $(this).val();
            })
            );

      var endTimeSelected = false;
      $endTimeField.find("option").each(function() {
         if ($(this).val() === currentEndTime) {
            $(this).attr("selected", "selected");
            endTimeSelected = true;
            return false;
         }
      });

      if (!endTimeSelected) {
         //automatically select an end date 2 slots away.
         $endTimeField.find("option:eq(1)").attr("selected", "selected");
      }

   });


   var $about = $("#about");

   $("#about_button").click(function() {
      $about.dialog({
         title: "About this calendar demo",
         width: 600,
         close: function() {
            $about.dialog("destroy");
            $about.hide();
         },
         buttons: {
            close : function() {
               $about.dialog("close");
            }
         }
      }).show();
   });


});