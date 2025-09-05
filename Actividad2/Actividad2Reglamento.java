import javax.swing.JOptionPane;
public class PAM {

public void ReglamentoPOO(){
JOptionPane.showMessageDialog(null,"Este es el reglamento para la clase de POO");
JOptionPane.showMessageDialog(null,
"1.-Se requieren 80% de asistencia para tener derecho a evaluacion de trabajos en clase \n" +
"2.-Se permiten 10 minutos de tolerancia y si el alumno llega despues de este tiempo puede permaneceren la clase, pero no se tomara la asistencia en clase Solamente en los horarios de inicio 7:00 am y 14:00 pm"+
"3. Las faltas deberan estar justificadas mediante el correo institucional con un plazo maximo de 24 horas posteriores a la hora de falta en clase mediante correo del tutor (a),\n"+
"justificantes entregados fuera de la fecha limite permitido no se aceptan, unicamente se aceptaran recetas medicas y citatorios juridicos.(De forma fisica deben ser presentados al  "+
"tutor para ser validados y de forma posterior emitidos).\n"+
"4. Las tareas y trabajos deberan subirlas al Classroom de forma individual y no se recibiran de manera extemporanea.(Salvo previo justificante validado por el tutor)\n"+
"5. Las tareas y trabajos presentarlos en tiempo y forma. La demora de un trabajo o tarea sin justificante y/o con justificante fuera del limite no se aceptan. " +
"6. Utilizar el correo institucional para trabajar bajo la plataforma Google Classroom.\n" +
"7. El plagio o copia de trabajos y/o examenes, sera condicionado a reprobar a la asignatura y se reporta al area correspondiente.\n"+
"8. Cualquier deshonestidad academica sera sancionada reprobando el parcial sin derecho a examen final \n"+
"9. En circunstancia de indisciplina o falta de respeto por parte del alumno hacia docentes,administrativos, companeros o cualquier persona perteneciente a la universidad, se realizara "+
"una primera llama de atencion, si el alumno hace caso omiso tendra que abandonar el aula, tres incidencias de este tipo el alumno no tendra derecho a examen final o parcial.\n"+
"10. Uso de laptops y/o dispositivos moviles quedara limitados a uso exclusivo de las actividades que asi lo requieran.\n"+
"11. Prohibido el uso de audifonos durante la clase.\n"+
"12. Prohibido comer y/o tomar liquidos en el salon.\n"+
"13. Prohibido sentarse encima de las mesas , asi como columpiarse en las sillas.\n"+
"14.Todo tema academido debe ser revisado primeramente por parte del alumno con el docente, de no resolverse, pasar con su respectivo tutor, y de ser necesario con la coordinacion"+
"de tutores. En caso de no solucionarse pasar a la direccion del programa educativo (debe mantenerse este seguimiento de forma obligatoria)\n"+
"15.Cualquier situacion no prevista en el presente reglamento pasar directamente con la direccion del programa educativo.\n"+
"16. El dia destinado a entrega de calificaciones todos los estudiantes deben estar presentes, ese dia se entregaran examenes y se brindara retroalimentacion \n"+
"17.Este reglamento entra en vigor despues de que se firme o se acepte por la mayoria de los estudiantes asistentes a la primera sesion de la materia, una vez firmado o aceptado por el"+
"50% mas el jefe de grupo, es vigente para todo alumno inscrito en el curso aunque no este presente en la primera sesion.");
}
public void LineamientosClassroom(){
JOptionPane.showMessageDialog(null,"\n 1.-Lineamientos ");
}
public void FechasDeParciales(){
JOptionPane.showMessageDialog(null,"1.- Primer parcial: 30 de septiembre del 2025.\n"+
"2.- Segundo parcial 4 de noviembre del 2025. \n"+
"3.- tercer parcial 2 de diciembre del 2025.");
}
public void PorcentajesPorParcial(){
JOptionPane.showMessageDialog(null,"\n 1.- Evidencia de conocimiento parcial 1 40% parcial 2 40% parcial 3 20% \n 2.-Evidencia de desempeno parcial 1 20% parcial 2 20%  parcial 3 10%  \n 3.-Evidencia de producto parcial 1 30% parcial 2 20%  parcial 3 40% \n 4.-Proyecto Integrador  parcial 1 10% parcial 2 20%  parcial 3 30%");
}

}
public void reglasclase(){
    String eleccion = JOptionPane.showInputDialog("Ingresa la opcion que deseas ver: ");
    switch(eleccion){
        case 1: inicio.ReglamentoPOO();
        break;
        case 2:inicio.LineamientosClassroom();
        break;
        case 3:inicio.FechasDeParciales();
        break;
        case 4:inicio.PorcentajesPorParcial();
        break;
        default JOptionPane.showMessageDialog(null,"Selecciona una opcion valida");
    }
}
public static void main(String[] args){
    PAM reglas = new PAM();
         reglas.reglasclase();
}