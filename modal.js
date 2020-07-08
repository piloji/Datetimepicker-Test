$(document).ready(function (){

  Date.prototype.dateFormat = function (format) {
        if (format == "H:i")
          return moment(this).format("HH:mm");
          return moment(this).format(format);
        };
    // datetimepicker
      var horarios = ['09:30','09:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30', '16:30','16:45','17:00','17:15','17:30','17:45','18:00','18:15','18:30'];
      // fechas de base de datos a String
      var fechas = $('#comp-fecha').val();
      var fecha = fechas.toString().replace(/\s+/g, ' ');


      var times = $('#comp-time').val();
      var time = times.toString().replace(/\s+/g, ' ');
      var tim = time.split(',');
      
      // si es viernes solo atiende hasta las 11:30
      var logic = function( currentDateTime ){
        if (currentDateTime.getDay() == 5) {

          this.setOptions({ maxTime: horarios[9] })

        }else {
          this.setOptions({ horarios })
        }
      };
      
      // variable hoy
      var dateToday = new Date();
      $('#datetime').datetimepicker({

        beforeShowDay: function(date) {

          return [date.getDay() == 1 || date.getDay() == 2 || date.getDay() == 3 || date.getDay() == 4 || date.getDay() == 5,]

          if (date.getDay() == 6 || date.getDay() == 0 ) {
            return false;
          }

        },

        format: 'Y/m/d H:i',
        allowTimes: horarios,
        minDateTime: dateToday,
        onChangeDateTime: logic,
        step: 15,
        onSelectTime: function () {
          this.setOptions({  });
        },

      });
      $.datetimepicker.setLocale('es')
});
