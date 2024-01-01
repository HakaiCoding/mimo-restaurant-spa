import { Component } from '@angular/core';

export interface ContactOption {
  value: string;
  refValue: string;
  icon: string;
}

export interface ContactData {
  options: ContactOption[];
}

export interface RRSSOption {
  name: string;
  icon: string;
  url: string;
}

export interface RRSSData {
  options: RRSSOption[];
}

interface AuthorData {
  name: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  public contactData: ContactData;
  public rrssData: RRSSData;
  public authorData: AuthorData;

  constructor() {
    this.contactData = {
      options: [
        {
          value: "+34 123 456 789",
          refValue: "tel:+34 123 456 789",
          icon: "phone-filled"
        },
        {
          value: "contacto@mimorestaurante.com",
          refValue: "mailto:contacto@mimorestaurante.com",
          icon: "mail-filled"
        },
        {
          value: "Calle Collado Mediano, 4, Alpedrete 28430",
          refValue: "https://maps.app.goo.gl/gcE62Cw8zBsBoGKS6",
          icon: "map-pin-filled"
        }
      ]
    };

    this.rrssData = {
      options: [
        {
          name: "Facebook",
          icon: "brand-facebook-filled",
          url: "https://facebook.com/people/Restaurante-MiMo/100084218615616/"
        },
        {
          name: "Instagram",
          icon: "brand-instagram",
          url: "https://www.instagram.com/restaurantemimoalpedrete/"
        },
        {
          name: "Google",
          icon: "brand-google-filled",
          url: "https://www.google.com/search?sa=X&sca_esv=594777552&hl=es&tbm=lcl&q=Restaurante+Mimo+Rese%C3%B1as&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNLK0tDAwMjQwAhKmpqZGxoYGGxgZXzFKBqUWlySWFiXmlaQq-Gbm5isABVIPb0wsXsSKWw4A7k7iGVMAAAA&rldimm=12998021020215552310&ved=2ahUKEwiInYfnrLqDAxWiTqQEHU18CAoQ9fQKegQIGxAF&biw=1920&bih=919&dpr=1#lkt=LocalPoiReviews"
        },
        {
          name: "Tripadvisor",
          icon: "brand-tripadvisor",
          url: "https://www.tripadvisor.es/Restaurant_Review-g562643-d2072964-Reviews-MiMo_Restaurante_ArteCocina-Alpedrete.html"
        }
      ]
    };

    this.authorData = {
      name: "Víctor Sánchez",
      url: "https://www.linkedin.com/in/v%C3%ADctor-s%C3%A1nchez-garc%C3%ADa-452830bb/"
    };

  }

}
