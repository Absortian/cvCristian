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
      profession: 'Team Lead Developer',
      bio: 'Desarrollador Full-Stack combinado con características DevOps y experiencia de Team Lead.',
      address: 'Badalona, Barcelona',
      social: [
        {name: 'envelope', url: 'mailto:lopez.cristian.deljulia@gmail.com'},
        {name: 'twitter', url: 'https://twitter.com/kr00nox'},
        {name: 'github', url: 'https://github.com/absortian'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/cristian-lópez-márquez-324743117/'}
      ],
      experience: [
        {jobTitle: 'Team Lead Developer', company: 'Eurotransportcar (Kosaas)', startDate: 'Abr 2018', endDate: 'Abr 2020', jobDescription: 'Líder de equipos de desarrollo y developer en proyectos realizados con framework Symfony. SysAdmin de entorno de preproducción y producción de Kubernetes + Docker.'},
        {jobTitle: 'Full Stack Developer', company: 'Eurotransportcar (Kosaas)', startDate: 'Feb 2018', endDate: 'Abr 2018', jobDescription: 'Inicio en la empresa como desarrollador Full Stack en framework Symfony.'},
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
        {name: 'Git', percentage: '100%'},
        {name: 'Symfony', percentage: '90%'},
        {name: 'PHP', percentage: '90%'},
        {name: 'HTML5', percentage: '95%'},
        {name: 'CSS', percentage: '90%'},
        {name: 'JavaScript', percentage: '75%'},
        {name: 'SQL', percentage: '90%'},
        {name: 'Linux', percentage: '90%'},
        {name: 'Windows', percentage: '90%'},
        {name: 'Networking', percentage: '90%'},
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
