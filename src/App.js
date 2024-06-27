import logo from './logo.svg';
import './Activos/CSS/App.css';
import Micomponente from './Componentes/MiComponente';

function Practica(nombre_curso, semestre){
  var muestra = (
    <div>
      <h2> Nombre del curso : {nombre_curso} </h2>
      <h2> Semestre : {semestre}</h2>
    </div>
  )
  return muestra;
}

function App() {
  var nombre_curso = "Front End";
  var semestre = 4
  var presentar_curso = <h2>El Curso es , {nombre_curso}</h2>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Asi se utiliza React
        </p>
        {Practica(nombre_curso,semestre)}

      <section className='compone'>
          <Micomponente/>
      </section>
      </header>
    </div>
  );
}



export default App;
