import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { CardSliderComponent } from './card-slider/card-slider.component';
import { FooterComponent } from './footer/footer.component';
import { Title } from '@angular/platform-browser';
import { fromEvent } from 'rxjs';
import { MatIcon } from '@angular/material/icon';


interface Experience {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  descriptionPoints: string[];
  duration?: string;
  employmentType?: string;
}

interface Achievement {
  name: string;
  issuer: string;
  date: Date  | string;
  icon: string;
  description?: string;
}

interface Course {
  name: string;
  provider: string;
}

interface VolunteerExperience {
  organization: string;
  position: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  duration?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, CardSliderComponent, FooterComponent, MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  host: {
    id: "mainApp",
    'mousemove': "onMouseMove()"
  }
})
export class AppComponent {
  fireArt: boolean = false;
  introCollapsed: boolean = false;

  skillsPrefix: string = "assets/images/skills/";
  skills = [
    { name: 'Angular', icon: 'Angular.png' },
    { name: 'AngularJS', icon: 'AngularJS.png' },
    { name: 'React.js', icon: 'React.png' },
    { name: 'RxJs', icon: 'RxJs.png' },
    { name: 'Zustand', icon: 'Zustand.png' },
    { name: 'Flask', icon: 'Flask.png' },
    { name: 'Cakephp', icon: 'Cakephp.png' },
    { name: 'Mysql', icon: 'Mysql.png' },
    { name: 'Sqlite', icon: 'Sqlite.png' },
    { name: 'Sass', icon: 'Sass.png' },
    { name: 'Bootstrap', icon: 'Bootstrap.png' },
    { name: 'CSS', icon: 'CSS3.png' },
    { name: 'HTML', icon: 'Html5.png' },
    { name: 'Javascript', icon: 'Javascript.png' },
    { name: 'Typescript', icon: 'Typescript.png' },
    { name: 'Jquery', icon: 'Jquery.png' },
    { name: 'Python', icon: 'Python.png' },
    { name: 'Java', icon: 'Java.png' },
    { name: 'PHP', icon: 'PHP.png' },
    { name: 'Kotlin', icon: 'Kotlin.png' },
    { name: 'C++', icon: 'C++.png' },
    { name: 'Git', icon: 'Git.png' },
    { name: 'Bitbucket', icon: 'Bitbucket.png' },
    { name: 'Github', icon: 'Github.png' },
    { name: 'Jira', icon: 'Jira.png' },
  ]

  aboutMe: string = `Passionate (I mean it) Frontend Engineer with +3 strong experience in Angular 16+ and React.js, focused on building fast, scalable web apps with clean architecture and responsive design. Skilled in state management using RxJS, Hooks, Context API, and Zustand. Enjoys working with modern tools, integrating third-party services, and adding smart AI features. Known for leading hackathons, delivering great user experiences, and actively mentoring and reviewing code.`;

  experiences: Experience[] = [
    {
      company: 'MEDGULF Saudi Arabia (via Shamsieh)',
      position: 'Senior Frontend Developer',
      startDate: new Date('2026-03-01'),
      descriptionPoints: [
        `Build and architect core modules for MEDGULF's main health insurance web application using Angular 21 and PrimeNG, focusing on writing clean, scalable, and highly performant frontend code.`,
        `Collaborate closely with product teams, engineers, and PMO to build major platform features, successfully turning complex insurance workflows into smooth digital experiences.`,
        `Contribute deep frontend expertise to solution designs, working alongside the team and stakeholders to ensure the successful delivery of high-priority digital initiatives.`
      ]
    },
    {
      company: 'Tamrah Applications',
      position: 'Full-Stack Developer / Consultant',
      startDate: new Date('2025-12-01'),
      endDate: new Date('2026-06-01'),
      descriptionPoints: [
        `Architected and built the entire frontend from scratch for the flagship application, Livin Journey, transitioning to a consultant role in March 2026.`,
        `Created and open-sourced ngx-directo, a custom Angular library that serves as the 100% critical foundation for the web platform.`,
        `Maximized performance by leveraging Angular 19+, PrimeNG, Signals, and zoneless change detection (removing Zone.js) for ultra-fast rendering.`,
        `Integrated Firebase Services to power real-time features and push notifications via FCM.`
      ]
    },
    {
      company: 'CR2 Ltd',
      position: 'Frontend Cross-Platform Developer',
      startDate: new Date('2025-07-01'),
      endDate: new Date('2025-12-01'),
      descriptionPoints: [
        `Built white-labeled Angular 14+ and Ionic projects, using modern features like Signals and standalone components.`,
        `Migrated APIs from SOAP to RESTful and optimized shared components.`,
        `Integrated Ionic and Capacitor to implement native device features.`
      ]
    },
    {
      company: 'Classera',
      position: 'Frontend Developer',
      startDate: new Date('2023-02-01'),
      endDate: new Date('2025-07-01'),
      descriptionPoints: [
        `Frontend Development: Built and maintained complex applications using Angular 16+, AngularJS, and React.js with modular, reusable architectures.`,
        `State Management: Implemented reactive data flows using RxJS (Angular) and managed global state in React via Zustand, Hooks, and Context API.`,
        `UI/UX: Developed responsive, accessible interfaces utilizing Angular Material, Material UI, and styled-components/SCSS.`,
        `Third-Party Integration: Integrated Form.io SDK for dynamic forms and managed educational content delivery via Go1 and Alison APIs.`
      ]
    }
  ];

  achievementsPrefix: string = "assets/images/achievements/";
  achievements: Achievement[] = [
    {
      name: '1st Place in NASA Space Apps Challenge',
      issuer: 'NASA - National Aeronautics and Space Administration',
      date: "Oct 2024",
      icon: 'nasa.png',
      description: 'Secured first place at the NASA Space Apps Challenge by addressing the "Seismic Detection Across the Solar System" challenge.'
    },
    {
      name: 'ZINC AI Hackathon Finalist',
      issuer: 'Zain Innovation Campus (ZINC)',
      date: "Sep 2024",
      icon: 'zinc.png',
      description: 'Finalist in the ZINC AI Hackathon, placed in the top 4 out of +30 competing teams of +150 participants passing all filtration rounds with our idea, "masArl".'
    },
    {
      name: '1st Place in Tahaluf Al Emirat\'s Generative AI Hackathon',
      issuer: 'Tahaluf Al Emarat Technical Solutions تحالف الإمارات للحلول التقنية',
      date: "Jan 2024",
      icon: 'tahaluf.png',
      description: 'Achieved the top position in Tahaluf Al Emarat\'s Generative AI Hackathon. Played a pivotal part in the creation of "Qissah".'
    }
  ];

  courses: Course[] = [
    { name: 'Advanced React', provider: 'Meta' },
    { name: 'Foundations of Coding Back-End', provider: 'Microsoft' },
    { name: 'Introduction to Programming With C#', provider: 'Microsoft' },
    { name: 'Getting Started with Go', provider: 'University of California, Irvine' },
    { name: 'Functions, Methods, and Interfaces in Go', provider: 'University of California, Irvine' }
  ];

  volunteerExperiences: VolunteerExperience[] = [
    {
      organization: 'Namaa Association for Community Development',
      position: 'Volunteer',
      location: 'Zarqa, Jordan',
      startDate: new Date('2023-07-01'),
      description: 'Supporting elders, orphans, and small businesses through community events and initiatives as part of the Tamkeen department'
    },
    {
      organization: 'Nasmo Just',
      position: 'Media Manager and Co-founder',
      location: 'Irbid, Jordan',
      startDate: new Date('2021-02-01'),
      endDate: new Date('2023-07-01'),
      description: 'Delivered innovative ideas and resources aimed at academic development.'
    }
  ];

  /**
   * Calculates the duration between two dates in years and months.
   * If no end date is provided, the current date is used.
   * 
   * @param {Date} startDate - The start date of the period.
   * @param {Date} [endDate] - The optional end date of the period.
   * @returns {string} - A string representing the duration in the format of "X years and Y months" or "Less than a month".
   */
  calculateDuration(startDate: Date, endDate?: Date): string {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const diff = end.getTime() - start.getTime();

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));

    const yearText = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
    const monthText = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';

    return `${yearText}${years && months ? ' and ' : ''}${monthText}` || 'Less than a month';
  }


  /**
   * Constructor for the AppComponent class.
   * Updates the experiences with calculated durations.
   * 
   * @param {Renderer2} renderer - Angular's Renderer2 for DOM manipulation.
   * @param {ElementRef} el - Reference to the root element of the component.
   */
  constructor(private renderer: Renderer2, private el: ElementRef, private titleService: Title) {
    this.experiences = this.experiences.map(experience => ({
      ...experience,
      duration: this.calculateDuration(experience.startDate, experience.endDate)
    }));
    this.volunteerExperiences = this.volunteerExperiences.map(volunteer => ({
      ...volunteer,
      duration: this.calculateDuration(volunteer.startDate, volunteer.endDate)
    }));
  }

  ngOnInit() {
    this.titleService.setTitle('Portfolio | Ahmad Alhafi');
  
    fromEvent(document, 'visibilitychange').subscribe(() => {
      if (document.hidden) {
        this.titleService.setTitle('Bruh, Come back!');
      } else {
        this.titleService.setTitle('Portfolio | Ahmad Alhafi');
      }
    });
  }

  /**
   * Handles the `mousemove` event.
   * Adjusts the background gradient of an element based on cursor position.
   * 
   * @param {MouseEvent} event - The mouse event object.
   */
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    const angle = x * 360;
    const normalIntroElement = this.el.nativeElement.querySelector('.intro.normal');
    this.renderer.setStyle(normalIntroElement, 'background-image', `linear-gradient(${angle}deg, black, #333, black)`);
  }

  /**
   * Activates the artistic animation when the mouse enters the intro area.
   */
  onMouseEnter(): void {
    if (!this.introCollapsed) {
      this.fireArt = true;
    }
  }

  /**
   * Deactivates the artistic animation when the mouse leaves the intro area.
   */
  onMouseLeave(): void {
    if (!this.introCollapsed) {
      this.fireArt = false;
    }
  }

  /**
   * Toggles the state of the intro section between collapsed and expanded.
   * Applies different styles and triggers animations.
   */
  toggleIntro(): void {
    this.introCollapsed = !this.introCollapsed;
    const normalIntroElement = this.el.nativeElement.querySelector('.intro.normal');
    const coolIntroElement = this.el.nativeElement.querySelector('.intro.cool');

    if (this.introCollapsed) {
      setTimeout(() => {
        this.renderer.setStyle(normalIntroElement, 'display', 'none');
        this.renderer.setStyle(coolIntroElement, 'display', 'flex');
        this.fireArt = false;
      }, 1000);
    } else {
      setTimeout(() => {
        this.renderer.setStyle(coolIntroElement, 'display', 'none');
        this.renderer.setStyle(normalIntroElement, 'display', 'flex');
      }, 1000);
    }
  }

}