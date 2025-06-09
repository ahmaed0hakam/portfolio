import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { CardSliderComponent } from './card-slider/card-slider.component';
import { FooterComponent } from './footer/footer.component';
import { Title } from '@angular/platform-browser';
import { fromEvent } from 'rxjs';


interface Experience {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  descriptionPoints: string[];
  duration?: string;
}

interface Achievement {
  name: string;
  issuer: string;
  date: Date  | string;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, CardSliderComponent, FooterComponent],
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

  aboutMe: string = `Passionate (I mean it) Software Engineer with strong experience in Angular 16+ and React.js, focused on building fast, scalable web apps with clean architecture and responsive design. Skilled in state management using RxJS, Hooks, Context API, and Zustand. Enjoys working with modern tools, integrating third-party services, and adding smart AI features. Known for leading hackathons, delivering great user experiences, and actively mentoring and reviewing code.`;

  experiences: Experience[] = [
    {
      company: 'Classera',
      position: 'Software Engineer',
      startDate: new Date('2023-02-01'),
      descriptionPoints: [
        `Built and maintained complex frontend applications using Angular 16+, AngularJS and React.js, following modular, reusable architecture.`,

        `Implemented state management patterns using RxJS in Angular, and Zustand, Hooks, and Context API in React.`,

        `Developed responsive, accessible UI components using Angular Material, styled-components/SCSS, and shadcn/ui in React.`,

        `Integrated dynamic forms and content delivery using Form.io SDK, Go1, and Alison across both Angular and React-based platforms.`,

        `Conducted peer code reviews, contributed to architecture discussions, and mentored 5+ junior developers.`,

        `Collaborated with backend teams to consume RESTful APIs built in CakePHP and MySQL, ensuring seamless frontend/backend alignment.`
      ]
    }
  ];

  achievementsPrefix: string = "assets/images/achievements/";
  achievements: Achievement[] = [
    {
      name: '1st Place at Nasa Space Apps Challenge Ar-Ramtha',
      issuer: 'NASA - National Aeronautics and Space Administration',
      date: "Oct 2024",
      icon: 'nasa.png'
    },
    {
      name: '1st Place at the Gen-AI Hackathon',
      issuer: 'Tahaluf Al Emarat Technical Solutions تحالف الإمارات للحلول التقنية',
      date: "Jan 2024",
      icon: 'tahaluf.png'
    }
  ]

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