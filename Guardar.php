<?php require( 'init.php' );  ?>
<?php require( 'inc/funcs.php' );  ?>
<?php

global $app_db;


$nombre = $_POST['nombre'];
$email = $_POST['email'];
$profesional = $_POST['medicos'];
$fecha = $_POST['fecha'];

$asunto = 'CONFIRMACIÓN DE TURNO!';
$cuerpo = 'Estimado ' . $nombre . '<br /><br /> hemos confirmado su turno
el dia '.$fecha.'. Muchas Gracias!';

enviarEmail($email, $nombre, $asunto, $cuerpo);

$sql = "INSERT INTO turnos
( nombre, email, profesional, fecha )
VALUES ('$nombre', '$email', '$profesional', '$fecha')";

$resultado = $app_db->query($sql);



 ?>
<?php require( 'Templates/head.php' ); ?>

<div class="cuerpo">
	<div class="row">
		<div class="row" style="text-align:center">
			<?php if($resultado) { ?>
				<h3>REGISTRO GUARDADO</h3>
				<?php } else { ?>
				<h3>ERROR AL GUARDAR</h3>
			<?php } ?>

			<a href="Turn-form.php" class="btn btn-primary">Regresar</a>

		</div>
	</div>
</div>
