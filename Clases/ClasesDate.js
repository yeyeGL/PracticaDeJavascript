const Fecha_Actual = new Date();

document.write(Fecha_Actual);
document.write('<br>');


let Fecha = new Date();
document.write('Hoy es :',Fecha.getDate());
document.write('<br>');
document.write('El mes es :',Fecha.getMonth()+1)
document.write('<br>');
document.write('El año es :',Fecha.getFullYear());
document.write('<br>');
document.write('La hora es :',Fecha.getHours(),'-',Fecha.getMinutes(),'-',Fecha.getSeconds());
