import javax.swing.JOptionPane;
public class Actividad2Reglamento {
public void ReglamentoPOO(){
JOptionPane.showMessageDialog(null,"Este es el reglamento para la clase de POO");
JOptionPane.showMessageDialog(null,
"1.-Se requieren 80% de asistencia para tener derecho a evaluacion de trabajos en clase \n" +
"2.-Se permiten 10 minutos de tolerancia y si el alumno llega despues de este tiempo puede permaneceren la clase, pero no se tomara la asistencia en clase Solamente en los horarios de inicio 7:00 am y 14:00 pm"+
"3. Las faltas deberan estar justificadas mediante el correo institucional con un plazo maximo de 24 horas posteriores a la hora de falta en clase mediante correo del tutor (a),\n"+
"justificantes entregados fuera de la fecha limite permitido no se aceptan, unicamente se aceptaran recetas medicas y citatorios juridicos.(De forma fisica deben ser presentados al  "+
"tutor para ser validados y de forma posterior emitidos).\n");
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


public void reglasclase(){
    String eleccion = JOptionPane.showInputDialog("Ingresa la opcion que deseas ver: ");
    switch(eleccion){
        case "1": 
        ReglamentoPOO();
        break;
        case "2":
        LineamientosClassroom();
        break;
        case "3":
        FechasDeParciales();
        break;
        case "4":
        PorcentajesPorParcial();
        break;
        default: JOptionPane.showMessageDialog(null,"Selecciona una opcion valida");
    }
}

public static void main(String[] args){
    Actividad2Reglamento reglas = new Actividad2Reglamento();
         reglas.reglasclase();
}
}