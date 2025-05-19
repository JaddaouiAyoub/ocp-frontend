import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {Router} from '@angular/router';

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
  constructor(private router: Router) {}
  items: string[] = [
    'Ligne F', 'Ligne E', 'MP3', 'MP4',
    'Ligne E DN 200', 'IMACID', 'IMACID DN 200',
    'PNP', 'JFO', 'JFD', 'JFT', 'JFQ', 'JFF'
  ];

  onItemClick(item: string) {
    console.log('Item cliqué:', item);
    // Redirection vers une route avec le nom du client (item)

      this.router.navigate(['dashboard/admin/client', item]);
      // Tu peux ici faire un traitement avec l'item récupéré
  }
}
