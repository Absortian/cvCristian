import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';

class App extends Component {
  render() {

    const person = {
      avatar: 'img/cristian.jpg',
      name: 'Cristian López Márquez',
      profession: 'Full Stack / Team Lead Developer',
      bio: 'Persona curiosa y proactiva. Desarrollador Full-Stack combinado con características DevOps y experiencia de Team Lead.',
      address: 'Badalona, Barcelona',
      social: [
        {name: 'envelope', url: 'mailto:absortian@gmail.com'},
        {name: 'twitter', url: 'https://twitter.com/absortian'},
        {name: 'github', url: 'https://github.com/absortian'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/cristian-lópez-márquez-324743117/'}
      ],
      experience: [
        {jobTitle: 'Web Developer', company: 'Aszende', startDate: 'Abr 2020', endDate: 'Actualidad', jobDescription: '<p>Desarrollo de aplicaciones internas.</p><p>Creación desde cero de sistema de gestión de flota de vehículos basado en API Rest con múltiples integraciones.</p><p>Integración de aplicaciones web con SAP</p><p>Desarrollo PHP con framework Symfony en versiones 2.8, 4.4 y 5.1</p>'},
        {jobTitle: 'Full Stack Developer / Team Lead Developer', company: 'Eurotransportcar (Kosaas)', startDate: 'Feb 2018', endDate: 'Abr 2020', jobDescription: "<ul><li>Desarrollo Full Stack.</li><li>Framework Symfony en diferentes proyectos con versiones:<ul><li>2.3</li><li>2.8</li><li>3.4</li><li>4.4</li></ul></li><li>Uso de Docker con orquestador Kubernetes.</li><li>Uso de control de versiones GIT con metodología GitFlow.</li><li>Desarrollo basado en sprint con el uso de Jira Software.</li><li>Realización de reuniones de formación interna / gestión de nuevos desarrollos con clientes.</li><li>Subidas de código périodicas, mínimo una semanal.</li><li>Lead de grupos de desarrollo</li><li>SysAdmin de entorno de preproducción y producción de Linux + Docker + Kubernetes.</li></ul>"},
        {jobTitle: 'SysAdmin', company: 'Birchman Group Spain', startDate: 'Oct 2016', endDate: 'Feb 2018', jobDescription: 'Administración de sistemas en CPDs que hospedaban máquinas virtuales bajo VMWare. Administración Linux y Windows.'},
      ],
      education: [
        {degree: 'CFGS Desarrollo de Aplicaciones Multiplataforma', institution: 'UOC', startDate: '2017', endDate: '2020', description: 'Realizado poco a poco debido a situación laboral.'},
        {degree: 'CFGS Administración de Sistemas Informáticos en Red', institution: 'INS La Pineda Badalona', startDate: '2015', endDate: '2018', description: ''},
        {degree: 'CFGM Microinformática y Redes', institution: 'INS La Pineda Badalona', startDate: '2013', endDate: '2015', description: ''},
      ],
      certificate: [
        {name: 'Google Cloud Computing', institution: 'Google', date: '2019', description: 'Certificación oficial de Google Activate' },
        {name: 'CCNA Discovery', institution: 'Cisco', date: '2014', description: 'Certificación de Redes' },
      ],
      skills: [
        {name: 'WebServices', percentage: '90%'},
        {name: 'API Rest', percentage: '90%'},
        {name: 'Git', percentage: '100%'},
        {name: 'Symfony', percentage: '90%'},
        {name: 'PHP', percentage: '90%'},
        {name: 'HTML5', percentage: '80%'},
        {name: 'CSS', percentage: '70%'},
        {name: 'JavaScript', percentage: '75%'},
        {name: 'SQL', percentage: '90%'},
        {name: 'Linux', percentage: '90%'},
        {name: 'Windows', percentage: '90%'},
        {name: 'Networking', percentage: '80%'},
        {name: 'Docker', percentage: '90%'},
        {name: 'Kubernetes', percentage: '90%'},
      ]
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience experience={person.experience} />
                <Education education={person.education} />
                <Certificate certificate={person.certificate} />
                <Skills skills={person.skills} />
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
