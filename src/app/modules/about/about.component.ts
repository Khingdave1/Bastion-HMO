import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ourPromises = [
    {
      id: 0,
      image: '../../../assets/img/about/wholesomeness.svg',
      name: 'Wholeness',
      description: 'We consistently deliver physical, emotional, social and spiritual health to our customers, empowering them to live a complete and harmonious life.'
    },
    {
      id: 1,
      image: '../../../assets/img/about/empathy.svg',
      name: 'Empathy',
      description: 'We understand and share the feelings of our customers and of one another,constantly seeking to promote a higher state of health.All our activities and processes are built around our desire to exceed customers’ expectations.'
    },
    {
      id: 2,
      image: '../../../assets/img/about/courage.svg',
      name: 'Courage',
      description: 'We empower one another to put customers, especially patients first. We have the courage to seek and create new ways of doing things; incremental or landmark. Continuous innovation with courage gives us a long-term competitive advantage.'
    },
    {
      id: 3,
      image: '../../../assets/img/about/agility.svg',
      name: 'Agility',
      description: 'We are dynamic, innovative and are quick to anticipate and respond to a changing market with new and effective solutions.'
    },
    {
      id: 4,
      image: '../../../assets/img/about/responsibility.svg',
      name: 'Responsibility',
      description: 'We are always accountable and answerable for our conduct. It is our individual and collective commitment to take ownership and carry out a task to a successful conclusion. This is a commitment to deliver results.'
    },
    {
      id: 5,
      image: '../../../assets/img/about/excellence.svg',
      name: 'Excellence',
      description: 'We seek and pursue the highest quality in all we do. It reflects the achievement of exemplary performance well in excess of normal expectations. Unbounded in our thinking, we are driven to excel in everything we do.'
    },

  ]

  // Board Members
  boardMembers = [
    {
      id: 0,
      image: '../../../assets/img/about/team/Ohis.png',
      name: "Ohis Ohiwerei",
      role: "Chairman",
      twitter: "",
      instagram: "",
      facebook: ""
    },
    {
      id: 1,
      image: '../../../assets/img/about/team/Obinna.png',
      name: "Obinna Ukachukwu",
      role: "Director",
      twitter: "",
      instagram: "",
      facebook: ""
    },
    {
      id: 2,
      image: '../../../assets/img/about/team/Siraj.png',
      name: "Siraj Abdullahi",
      role: "Director",
      twitter: "",
      instagram: "",
      facebook: ""
    },
    {
      id: 3,
      image: '../../../assets/img/about/team/Tosin.png',
      name: "Siraj Abdullahi",
      role: "Director",
      twitter: "",
      instagram: "",
      facebook: ""
    },
    {
      id: 4,
      image: '../../../assets/img/about/team/Naomi.png',
      name: "Naomi Aduku",
      role: "Director",
      twitter: "",
      instagram: "",
      facebook: ""
    },
    {
      id: 5,
      image: '../../../assets/img/about/team/Kola.png',
      name: "Kola Oni",
      role: "Director",
      twitter: "",
      instagram: "",
      facebook: ""
    },
    {
      id: 6,
      image: '../../../assets/img/about/team/Tokunbo.png',
      name: "Dr. Tokunbo Otitoju",
      role: "Managing Director",
      twitter: "",
      instagram: "",
      facebook: ""
    },
    {
      id: 7,
      image: '../../../assets/img/about/team/Suliat.png',
      name: "Suliat Giwa",
      role: "Director",
      twitter: "",
      instagram: "",
      facebook: ""
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
