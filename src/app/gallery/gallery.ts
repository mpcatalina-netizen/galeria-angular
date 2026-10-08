import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCard } from '../image-card/image-card';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, ImageCard],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})

export class Gallery {

  images = [
    {
      title: 'Brownie',
      description: 'Brownie de chocolate con nueces pecanas',
      src: '/images/4540.jpg'
    },
    {
      title: 'Tarta de queso',
      description: 'Tarta de queso horneada artesanalmente',
      src: '/images/4624.jpg'
    },
    {
      title: 'Madeleines',
      description: 'Bizcochos franceses elaborados diariamente',
      src: '/images/4716.jpg'
    },
    {
      title: 'Bizcocho de limón',
      description: 'Bizcocho esponjoso con glaseado de limón',
      src: '/images/4770.jpg'
    },
    {
      title: 'Banana Bread',
      description: 'Producto artesanal',
      src: '/images/4791.jpg'
    },
    {
      title: 'Cinnamon Roll',
      description: 'Roll de canela con glaseado tradicional',
      src: '/images/4921.jpg'
    }
  ];
selectedImage: any = null;

openImage(image: any) {
  this.selectedImage = image;
}

closeImage() {
  this.selectedImage = null;
}
}

