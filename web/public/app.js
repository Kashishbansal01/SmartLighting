const API_URL = 'https://localhost:5000/api';
const MQTT_URL = 'https://localhost:5001/mqtt';


$('#add_devs_floor').on('change', function() {  
  var floor = $(this).val();
  var rooms = $('#add_devs_room');

  rooms.empty();
  console.log('Selected floor:', floor);
  $.ajax({
    url: `${API_URL}/getRooms?floor=${floor}`,
    type: 'GET',
    success: function(data) {
      console.log('Retrieved rooms:', data);

      data.forEach(function(roomNumber) {
        rooms.append($('<option>', {
          value: roomNumber,
          text: roomNumber
        }));
      });

    },
    error: function(xhr, status, error) {
      console.log('Error:', error);
    }
  });
});


$('#remo_floor_now').on('change', function() {
  console.log('Inside change event');
  
  var floor = $(this).val();
  var rooms = $('#remo_room');

  rooms.empty();
  rooms.append($('<option>', {value:"", text: "--Select--"}));

  console.log('Selected floor:', floor);

  $.ajax({
    url: `${API_URL}/getRooms?floor=${floor}`,
    type: 'GET',
    success: function(data) {
      console.log('Retrieved rooms:', data);

      data.forEach(function(roomNumber) {
        rooms.append($('<option>', {
          value: roomNumber,
          text: roomNumber
        }));
      });

      console.log('Populated rooms:', rooms);
    },
    error: function(xhr, status, error) {
      console.log('Error:', error);
    }
  });
});


$('#ds_1_f').on('change', function() {
  console.log('Inside change event');
  
  var floor = $(this).val();
  var rooms = $('#dev_1_r');

  rooms.empty();
  rooms.append($('<option>', {value:"", text: "--Select--"}));

  console.log('Selected floor:', floor);

  $.ajax({
    url: `${API_URL}/getRooms?floor=${floor}`,
    type: 'GET',
    success: function(data) {
      console.log('Retrieved rooms:', data);

      data.forEach(function(roomNumber) {
        rooms.append($('<option>', {
          value: roomNumber,
          text: roomNumber
        }));
      });

      console.log('Populated rooms:', rooms);
    },
    error: function(xhr, status, error) {
      console.log('Error:', error);
    }
  });
});



$('#ds_2_f').on('change', function() {
  console.log('Inside change event');
  
  var floor = $(this).val();
  var rooms = $('#ds_2_r');

  rooms.empty();
  rooms.append($('<option>', {value:"", text: "--Select--"}));

  console.log('Selected floor:', floor);

  $.ajax({
    url: `${API_URL}/getRooms?floor=${floor}`,
    type: 'GET',
    success: function(data) {
      console.log('Retrieved rooms:', data);

      data.forEach(function(roomNumber) {
        rooms.append($('<option>', {
          value: roomNumber,
          text: roomNumber
        }));
      });

      console.log('Populated rooms:', rooms);
    },
    error: function(xhr, status, error) {
      console.log('Error:', error);
    }
  });
});


$('#ds_3_f').on('change', function() {
  console.log('Inside change event');
  
  var floor = $(this).val();
  var rooms = $('#ds_3_r');

  rooms.empty();
  rooms.append($('<option>', {value:"", text: "--Select--"}));

  console.log('Selected floor:', floor);

  $.ajax({
    url: `${API_URL}/getRooms?floor=${floor}`,
    type: 'GET',
    success: function(data) {
      console.log('Retrieved rooms:', data);

      data.forEach(function(roomNumber) {
        rooms.append($('<option>', {
          value: roomNumber,
          text: roomNumber
        }));
      });

      console.log('Populated rooms:', rooms);
    },
    error: function(xhr, status, error) {
      console.log('Error:', error);
    }
  });
});


$('#dev_1_r').on('change',function() {
  if ($('#dev_1_r') != undefined && $('#loor') != undefined && ('#ds_1_type') != undefined) {
    const devices = $('#ds_1_device');
    console.log("yes, I am here");
    devices.empty();
    
    const floor = $('#ds_1_floor').val();
    const room = $('#dev_1_r').val();
    const type = $('#ds_1_type').val();
    console.log(floor, room, type);

    $.ajax({
      url: `${API_URL}/getDevs?floor=${floor}&type=${type}&room=${room}`,
      type: 'GET',
      success: function(data) {
        console.log('Retrieved devices:', data);  
        data.forEach(function(device) {
          devices.append($('<option>', {
            value: device.name,
            text: device.name
          }));
        });
  
        console.log('Populated rooms:', devices);
      },
      error: function(xhr, status, error) {
        console.log('Error:', error);
      }
    });
  }

});



$('#ds_2_r').on('change',function() {
  if ($('#ds_2_r') != undefined && $('#ds_2_f') != undefined && ('#ds_2_t') != undefined) {
    const devices = $('#ds_2_device');
    console.log("yes, I am here");
    devices.empty();
    
    const floor = $('#ds_2_f').val();
    const room = $('#ds_2_r').val();
    const type = $('#ds_2_t').val();
    console.log(floor, room, type);

    $.ajax({
      url: `${API_URL}/getDevs?floor=${floor}&type=${type}&room=${room}`,
      type: 'GET',
      success: function(data) {
        console.log('Retrieved devices:', data);  
        data.forEach(function(device) {
          devices.append($('<option>', {
            value: device.name,
            text: device.name
          }));
        });
  
        console.log('Populated rooms:', devices);
      },
      error: function(xhr, status, error) {
        console.log('Error:', error);
      }
    });
  }

});

$('#ds_3_r').on('change',function() {
  if ($('#ds_3_r') != undefined && $('#ds_3_f') != undefined && ('#ds_3_t') != undefined) {
    const devices = $('#ds_3_device');
    console.log("yes, I am here");
    devices.empty();
    
    const floor = $('#ds_3_f').val();
    const room = $('#ds_3_r').val();
    const type = $('#ds_3_t').val();
    console.log(floor, room, type);

    $.ajax({
      url: `${API_URL}/getDevs?floor=${floor}&type=${type}&room=${room}`,
      type: 'GET',
      success: function(data) {
        console.log('Retrieved devices:', data);  
        data.forEach(function(device) {
          devices.append($('<option>', {
            value: device.name,
            text: device.name
          }));
        });
  
        console.log('Populated rooms:', devices);
      },
      error: function(xhr, status, error) {
        console.log('Error:', error);
      }
    });
  }

});

$('#dev_dev_floor').on('change', function() {
  console.log('Inside change event');
  
  var floor = $(this).val();
  var rooms = $('#dev_dev_r');

  rooms.empty();
  rooms.append($('<option>', {value:"", text: "--Select--"}));

  console.log('Selected floor:', floor);

  $.ajax({
    url: `${API_URL}/getRooms?floor=${floor}`,
    type: 'GET',
    success: function(data) {
      console.log('Retrieved rooms:', data);

      data.forEach(function(roomNumber) {
        rooms.append($('<option>', {
          value: roomNumber,
          text: roomNumber
        }));
      });

      console.log('Populated rooms:', rooms);
    },
    error: function(xhr, status, error) {
      console.log('Error:', error);
    }
  });
});


$('#dev_dev_btn').on('click', function() {
  var floor = $('#dev_dev_floor').val();
  var room = $('#dev_dev_r').val();
  var type = $('#dev_dev_ty').val();
  var name = $('#dev_dev_device').val();
  if ($('#dev_dev_r') != undefined && $('#dev_dev_floor') != undefined && ('#dev_dev_ty') != undefined && ('#dev_dev_device') != undefined) {
    $.ajax({
    url: `${API_URL}/th?floor=${floor}&room=${room}&name=${name}`,
    method: 'GET',
    success: (data) => {
      $('#data_container').empty();
      $('#data_container').append(`<h2 style="color: #ffffff;">Device Data</h2><label style="color: #ffffff;">Name: ${name}</label><br><label style="color: #ffffff;">Type: ${type}</label><br><label style="color: #ffffff;">Floor: ${floor}</label><br><label style="color: #ffffff;">Room: ${room}</label><br><label style="color: #ffffff;">Temperature Data: ${data.temp }</label><br><br><label style="color: #ffffff;">Humidity Data: ${data.humid }</label><br>`);
      var chartOptions = {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Air Condition'
        },
        xAxis: {
          categories: 'DEVICE'
        },
        yAxis: {
          title: {
            text: 'Data'
          }
        },
        series: [{
          name: 'Temperature',
          data: data.temp
        },
        {
          name: 'Humidity',
          data: data.humid
        }]
      };
      $(document).ready(function() {      $('#graph').highcharts(chartOptions);
    });
    },
    error: (err) => {
      console.log('Error:', err);
    }
  });
  }
});


$('#add_d').on('click', function(){
    var name = $('#add_devs_name').val();
    var floor = $('#add_devs_floor').val();
    var room = $('#add_devs_room').val();
    var type = $('#add_devs_type').val();
    console.log(name);
    console.log(room);
    console.log(floor);
    console.log(type);
    if (type == '1') {
        $.ajax({
            url: `${API_URL}/lighting`,
            type: "POST",
            data: {
              name: name, 
              floor: floor,
              room: room 
            },
            success: function(response) {
              console.log(response); 
            },
            error: function(xhr, status, error) {
              console.log("Error: " + error); 
            }
        });
    }
    else if(type == '2'){
        $.ajax({
            url: `${API_URL}/ac`,
            type: "POST",
            data: {
              name: name, 
              floor: floor,
              room: room 
            },
            success: function(response) {
              console.log(response); 
            },
            error: function(xhr, status, error) {
              console.log("Error: " + error); 
            }
        });
    }
    else if(type == '3'){
        $.ajax({
            url: `${API_URL}/security`,
            type: "POST",
            data: {
              name: name, 
              floor: floor,
              room: room 
            },
            success: function(response) {
              console.log(response); 
            },
            error: function(xhr, status, error) {
              console.log("Error: " + error); 
            }
        });
    }

    $('#new_device_floor').val("");
});

$('#dev_dev_r').on('change',function() {
  if ($('#dev_dev_r') != undefined && $('#dev_dev_floor') != undefined && ('#dev_dev_ty') != undefined) {
    const devices = $('#dev_dev_device');
    devices.empty();
    
    const floor = $('#dev_dev_floor').val();
    const room = $('#dev_dev_r').val();
    const type = $('#dev_dev_ty').val();
    console.log(floor, room, type);

    $.ajax({
      url: `${API_URL}/getDevs?floor=${floor}&type=${type}&room=${room}`,
      type: 'GET',
      success: function(data) {
        console.log('Retrieved devices:', data);  
        data.forEach(function(device) {
          devices.append($('<option>', {
            value: device.name,
            text: device.name
          }));
        });
  
        console.log('Populated rooms:', devices);
      },
      error: function(xhr, status, error) {
        console.log('Error:', error);
      }
    });
  }

});


//REMOVE 
$('#remo_room').on('change',function() {
  if ($('#remo_floor_now') != undefined && $('#remo_room') != undefined && ('#remo_dev_type') != undefined) {
    const devices = $('#remove_dev');
    devices.empty();
    
    const floor = $('#remo_floor_now').val();
    const room = $('#remo_room').val();
    const type = $('#remo_dev_type').val();
    console.log(floor, room, type);

    $.ajax({
      url: `${API_URL}/getDevs?floor=${floor}&type=${type}&room=${room}`,
      type: 'GET',
      success: function(data) {
        console.log('Retrieved devices:', data);  
        data.forEach(function(device) {
          devices.append($('<option>', {
            value: device.name,
            text: device.name
          }));
        });
  
        console.log('Populated rooms:', devices);
      },
      error: function(xhr, status, error) {
        console.log('Error:', error);
      }
    });
  }

});


$('#remove_d_btn').on('click', function () {
  const type = $('#remo_dev_type').val();
  const floor = $('#remo_floor_now').val();
  const room = $('#remo_room').val();
  const device = $('#remove_dev').val();

  if (type && floor && room && device) {
    $.ajax({
      url: `${API_URL}/remove_devices`,
      type: 'DELETE',
      data: { type: type, floor: floor, room: room, device: device },
      success: function () {
        console.log('Device getDevsd successfully');
        $('#remo_floor_now').val("");
  
      },
      error: function (xhr, status, error) {
        console.error('Error removing device:', error);
      }
    });
  } else {
    console.error('Missing required fields');
  }
});

$('#dev_preference').on('click', function () {
  const type1 = $('#ds_1_type').val();
  const floor1 = $('#loor').val();
  const room1 = $('#dev_1_r').val();
  const device1 = $('#ds_1_d').val();
  const type2 = $('#ds_2_t').val();
  const floor2 = $('#ds_2_f').val();
  const room2 = $('#ds_2_r').val();
  const device2 = $('#ds_2_d').val();
  const type3 = $('#ds_3_t').val();
  const floor3 = $('#ds_3_f').val();
  const room3 = $('#ds_3_r').val();
  const device3 = $('#ds_3_d').val();

  if (type1 && floor1 && room1 && device1 && type2 && floor2 && room2 && device2 && type3 && floor3 && room3 && device3) {
    $.ajax({
      url: `${MQTT_URL}/pref`,
      type: 'POST',
      data: { d1:{type: type1, floor: floor1, room: room1, device: device1}, d2:{type: type2, floor: floor2, room: room2, device: device2}, d3:{type: type3, floor: floor3, room: room3, device: device3}},
      success: function () {
        console.log('Pref set, successfully');
        // $('#remo_floor_now').val("");
  
      },
      error: function (xhr, status, error) {
        console.error('Error pref device:', error);
      }
    });
  } else {
    console.error('Missing required fields');
  }
});

$(document).ready(function() {
    const table = $('#lighting_devices_list');
    console.log('yep')
    $.ajax({
      url: `${API_URL}/lighting`,
      method: 'GET',
      success: function(data) {
        data.forEach(function(lighting) {
          const row = $('<tr></tr>');
          $('<td style="color: #ffffff;"></td>').text(lighting.name).appendTo(row);
          $('<td style="color: #ffffff;"></td>').text(lighting.room).appendTo(row);
          $('<td style="color: #ffffff;"></td>').text(lighting.floor).appendTo(row);
          $('<td style="color: #ffffff;"></td>').text(lighting.status).appendTo(row);
          table.append(row);
        });
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log('Error:', errorThrown);
      }
    });
  });
  
  $('#new_device_floor').on('change', function() {

  });

  $(document).ready(function() {
    const table = $('#security_devices_list');
    $.ajax({
      url: `${API_URL}/security`,
      method: 'GET',
      success: function(data) {
        data.forEach(function(lighting) {
          const row = $('<tr></tr>');
          $('<td style="color: #ffffff;"></td>').text(lighting.name).appendTo(row);
          $('<td style="color: #ffffff;"></td>').text(lighting.room).appendTo(row);
          $('<td style="color: #ffffff;"></td>').text(lighting.floor).appendTo(row);
          $('<td style="color: #ffffff;"></td>').text(lighting.status).appendTo(row);
          table.append(row);
        });
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log('Error:', errorThrown);
      }
    });
  });
  
  $(document).ready(function() {
    const table = $('#acondit_devices_list');
    console.log('yep')
    $.ajax({
      url: `${API_URL}/ac`,
      method: 'GET',
      success: function(data) {
        data.forEach(function(lighting) {
          const row = $('<tr></tr>');
          $('<td style="color: #ffffff;"></td>').text(lighting.name).appendTo(row);
          $('<td style="color: #ffffff;"></td>').text(lighting.room).appendTo(row);
          $('<td style="color: #ffffff;"></td>').text(lighting.floor).appendTo(row);
          $('<td style="color: #ffffff;"></td>').text(lighting.status).appendTo(row);
          table.append(row);
        });
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log('Error:', errorThrown);
      }
    });
  });

// mqtt stuff

$('#send-command').on('click', function() {
  const deviceId = $('#deviceId').val();
  const command = $('#command').val();
  $.post(MQTT_URL, { deviceId, command })
  .then(response => {
  location.href = '/';
  })

});


