<?php require( 'init.php' );  ?>
<?php require( 'inc/funcs.php' );  ?>
<?php

session_start();
$errors = array();

if ( !isset($_SESSION['id_usuario']) ) {
  header('location: index.php'); /*solo si queremos redireccinoar*/
}




$idUsuario = $_SESSION['id_usuario'];
$sql = "SELECT id, nombre FROM usuarios WHERE id = '$idUsuario'";
$result = $app_db->query($sql);

$row = $result->fetch_assoc();

// Validar fechas

$db = "SELECT DATE_FORMAT(fecha, '%Y/%m/%d') as date FROM turnos";
$resultado = $app_db->query($db);

$tb = "SELECT DATE_FORMAT(fecha, '%H:%i') as time FROM turnos";
$resul = $app_db->query($tb);


?>
 <?php require( 'Templates/header.php' ); ?>

<!-- Formulario -->
<div class="Dates">
  <div class="fondo"></div>


  <section class="form-turno" id="formulario">

    <form action="guardar.php" method="POST">
      <h4> Formulario de Turnos</h4>

      <div class="welcome-msj">
        <h3 style="font-size: 15px; margin-bottom: 20px;"><?php echo 'Bienvenid@ '.utf8_decode($row['nombre']); ?></h3>
      </div>

      <label for="Nombre">Nombre</label>
      <input class="controls" type="text" name="nombre" value="<?php echo utf8_decode($row['nombre']) ?>">

      <label for="Correo">Correo (requerido)</label>
      <input class="controls" type="email" name="email" value="" >

      <label for="Medico">Profesional</label>
      <select class="controls" name="medicos" required>
        <option value="" selected>...</option>
        <option value="Jorge L. Claro">Jorge L. Claro</option>
        <option value="Mariano D. Claro">Mariano D. Claro</option>
      </select>

      <label for="Fecha">Fecha</label>
      <input class="controls eventStartDate newEventStart eventEditDate startTime eventEditMetaEntry" id="datetime" name="fecha" readonly="readonly" autocomplete="off" required>

      <input type="hidden" id="comp-fecha" name="hash" value="<?php while( $col = $resultado->fetch_array(MYSQLI_ASSOC)) {?>
          <?php echo $col[ 'date' ]. "," ?>
      <?php } ?>">

      <input type="hidden" id="comp-time" name="hash" value="<?php while( $tim = $resul->fetch_array(MYSQLI_ASSOC)) {?>
          <?php echo $tim[ 'time' ] . "," ?>
      <?php } ?>">

      <p> <input class="boton" type="submit" name="submit-new-turno" id="submit-new-turno" value="Nuevo turno"> </p>
    </form>

  </section>
</div>



<?php require( 'Templates/footer.php' ); ?>
