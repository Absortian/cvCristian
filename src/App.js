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
      //bio: 'Persona curiosa y proactiva. Desarrollador Full-Stack combinado con características DevOps y experiencia de Team Lead.',
      bio: 'Curious and proactive person. Full-Stack Developer combined with DevOps features and Team Lead experience.',
      address: 'Badalona, Barcelona',
      social: [
        {name: 'envelope', url: 'mailto:absortian@gmail.com'},
        {name: 'twitter', url: 'https://twitter.com/absortian'},
        {name: 'github', url: 'https://github.com/absortian'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/cristian-lópez-márquez-324743117/'}
      ],
      experience: [
        //{jobTitle: 'Web Developer', company: 'Aszende', startDate: 'Abr 2020', endDate: 'Actualidad', jobDescription: '<ul><li>Desarrollo de aplicaciones internas.</li><li>Diseño y creación desde cero de proyectos PHP-Symfony basados en API Rest</li><li>Uso de Framework Symfony con versiones:<ul><li>2.8</li><li>4.4</li><li>5.1</li></ul></li></ul>'},
        {jobTitle: 'Web Developer', company: 'Aszende', startDate: 'Apr 2020', endDate: 'Now', jobDescription: '<ul><li> Development of internal applications. </li><li> Design and creation from scratch of PHP-Symfony projects based on Rest API </li><li> Use of Symfony Framework with versions:<ul><li>2.8</li><li>4.4</li><li>5.1</li></ul></li><li>Migration of projects to Docker containers</li><li>Migration of servers to Azure cloud environment with Docker containers</li></ul>'},
        //{jobTitle: 'Full Stack Developer / Team Lead Developer', company: 'Eurotransportcar (Kosaas)', startDate: 'Feb 2018', endDate: 'Abr 2020', jobDescription: "<ul><li>Desarrollo Full Stack.</li><li>Framework Symfony en diferentes proyectos con versiones:<ul><li>2.3</li><li>2.8</li><li>3.4</li><li>4.4</li></ul></li><li>Uso de Docker con orquestador Kubernetes.</li><li>Uso de control de versiones GIT con metodología GitFlow.</li><li>Desarrollo basado en sprint con el uso de Jira Software.</li><li>Realización de reuniones de formación interna / gestión de nuevos desarrollos con clientes.</li><li>Subidas de código périodicas, mínimo una semanal.</li><li>Lead de grupos de desarrollo</li><li>SysAdmin de entorno de preproducción y producción de Linux + Docker + Kubernetes.</li></ul>"},
        {jobTitle: 'Full Stack Developer / Team Lead Developer', company: 'Eurotransportcar (Kosaas)', startDate: 'Feb 2018', endDate: 'Apr 2020', jobDescription: "<ul><li> Full Stack Development. </li><li> Symfony Framework in different projects with versions: <ul><li> 2.3 </li><li> 2.8 </li><li> 3.4 </ li><li> 4.4 </li></ul></li><li> Using Docker with the Kubernetes orchestrator. </li><li> Use of GIT version control with GitFlow methodology. </li><li> Sprint-based development using Jira Software. </li><li> Conducting internal training meetings / management of new developments with clients. </li><li> Periodic code uploads, minimum one weekly. </li><li> Development group leader </li><li> Linux + Docker + Kubernetes pre-production and production environment SysAdmin. </li></ul>"},
        //{jobTitle: 'SysAdmin', company: 'Birchman Group Spain', startDate: 'Oct 2016', endDate: 'Feb 2018', jobDescription: 'Administración de sistemas en CPDs que hospedaban máquinas virtuales bajo VMWare. Administración Linux y Windows.'},
        {jobTitle: 'SysAdmin', company: 'Birchman Group Spain', startDate: 'Oct 2016', endDate: 'Feb 2018', jobDescription: 'Systems administration in CPDs that hosted virtual machines under VMWare. Linux and Windows administration.'},
      ],
      education: [
        {degree: 'Spanish CFGS DAM', institution: 'UOC', startDate: '2017', endDate: '2020', description: ''},
        //{degree: 'CFGS Desarrollo de Aplicaciones Multiplataforma', institution: 'UOC', startDate: '2017', endDate: '2020', description: 'Realizado poco a poco debido a situación laboral.'},
        {degree: 'Spanish CFGS ASIR or ASIX', institution: 'INS La Pineda Badalona', startDate: '2015', endDate: '2018', description: ''},
        //{degree: 'CFGS Administración de Sistemas Informáticos en Red', institution: 'INS La Pineda Badalona', startDate: '2015', endDate: '2018', description: ''},
        {degree: 'Spanish CFGM SMR or SMX', institution: 'INS La Pineda Badalona', startDate: '2013', endDate: '2015', description: ''},
        //{degree: 'CFGM Microinformática y Redes', institution: 'INS La Pineda Badalona', startDate: '2013', endDate: '2015', description: ''},
      ],
      certificate: [
        {name: 'Google Cloud Computing', institution: 'Google', date: '2019', description: 'Official Google Activate Certification' },
        //{name: 'Google Cloud Computing', institution: 'Google', date: '2019', description: 'Certificación oficial de Google Activate' },
        {name: 'CCNA Discovery', institution: 'Cisco', date: '2014', description: 'Networking Certification' },
        //{name: 'CCNA Discovery', institution: 'Cisco', date: '2014', description: 'Certificación de Redes' },
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
