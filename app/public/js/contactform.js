


    $.ajax("/data", {
      type: "GET",
       }).then(
      function(data) {
        var trucks =[];
        var id = [];
        for (var i = 0; i<data.length; i++){
          id[i] = data[i].id;
          trucks[i] = data[i].foodtruck_name;
  
          var newoption = `<option value= ${id[i]}> ${trucks[i]}</option>`;
  
          $('#existing_foodtruck_name').append(newoption);

        }
    
      }
    );



//function to validate form data, ensure no fields are blank
function validateForm() {
  var isValid = true;
    $(".form-control").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    });
    return isValid;
  }


  $('#existing_foodtruck_name').on('change', function(){

    if($('#existing_foodtruck_name').val()){

      $('#submittruck').attr('disabled', true);

      var val = $('#existing_foodtruck_name').val();


      $.ajax("/data/food_truck/id/" + val, {
        type: "GET"
        }).then(
        function(data) {


            $("#truck-name2").val(data[0].foodtruck_name);
            $("#truck-phone").val(data[0].contact);
            $("#truck-description").val(data[0].descr);
            $("#truck-cuisine").val(data[0].cuisine);
            $("#truck-location").val(data[0].location);
            $("#truck-date").val(data[0].date);
        }
    );



    
    }else{

      $('#submittruck').attr('disabled', false);
    }

  })
  

  //when the submit is clicked to add a new food truck, validate the form and send the data
 
  $('#submittruck').on("click", function(event) {
     event.preventDefault();
    if(validateForm()){
    // Here we grab the form elements and remove blank spaces

    

    var newTruck = {
      foodtruck_name: $("#truck-name2").val().trim(),
      contact: $("#truck-phone").val().trim(),
      descr: $("#truck-description").val().trim(),
      cuisine: $("#truck-cuisine").val().trim(),
      location: $("#truck-location").val().trim(),
      date: $("#truck-date").val().trim()
    };

    console.log(newTruck);
    $.post("/api/model", newTruck,
      function(data) {
        console.log("data from repsonse " + data[0].changedRows);

        // If a truck is added, send alert.
        if (data.length) {
          alert("Congratulations, your truck was added!");
        
        }else {
          alert("Sorry, the truck was not added");
        }
        // Clear the form when submitting
      $("#existing_foodtruck_name").val('');
       $("#truck-name2").val('');
       $("#truck-phone").val('');
       $("#truck-description").val('');
       $("#truck-cuisine").val('');
       $("#truck-location").val('')
       $("#truck-date").val('')

      });
  }else {
      alert("Please fill out all fields before submitting the new truck!");
      
    }
  });

   //when the update is clicked to update an existing food truck, validate the form and send the data
   $("#updatetruck").on("click", function(event) {
    event.preventDefault();
    if(validateForm()){
    var updateTruck = {
      id: $("#existing_foodtruck_name").val().trim(),
      foodtruck_name: $("#truck-name2").val().trim(),
      contact: $("#truck-phone").val().trim(),
      descr: $("#truck-description").val().trim(),
      cuisine: $("#truck-cuisine").val().trim(),
      location: $("#truck-location").val().trim(),
      date: $("#truck-date").val().trim()
    };

    console.log(updateTruck);


    $.ajax("/api/model/" + updateTruck.id, {
      type: "PUT",
      data: updateTruck
    }).then(
      function(data) {

        
        // If a truck is added, send alert.
        if (data) {
          alert("Congratulations, your truck was updated!");
        }
        else {
          alert("Sorry, the truck was not updated");
        }
        // Clear the form when submitting
       $("#existing_foodtruck_name").val('');
       $("#truck-name2").val('');
       $("#truck-name").val('');
       $("#truck-phone").val('');
       $("#truck-description").val('');
       $("#truck-cuisine").val('');
       $("#truck-location").val('');
       $("#truck-date").val('');

      });
  }else {
      alert("Please fill out all fields before submitting the update!");
      
    }
  });
  