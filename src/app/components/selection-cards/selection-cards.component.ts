import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-selection-cards',
  templateUrl: './selection-cards.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./selection-cards.component.css']
})
export class SelectionCardsComponent {
  items: string[] = [
    'Ligne F', 'Ligne E', 'MP3', 'MP4',
    'Ligne E DN 200', 'IMACID', 'IMACID DN 200',
    'PNP', 'JFO', 'JFD', 'JFT', 'JFQ', 'JFF'
  ];

  onItemClick(item: string) {
    console.log('Item cliqué:', item);
    // Tu peux ici faire un traitement avec l'item récupéré
  }
}
