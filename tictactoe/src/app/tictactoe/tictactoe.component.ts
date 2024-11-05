import {Component, Signal, viewChild} from '@angular/core';
import {Player, TictactoeTableComponent} from './tictactoe-table/tictactoe-table.component';

@Component({
  selector: 'app-tictactoe',
  standalone: true,
  imports: [
    TictactoeTableComponent
  ],
  templateUrl: './tictactoe.component.html',
  styleUrl: './tictactoe.component.scss'
})
export class TictactoeComponent {
  protected readonly table: Signal<TictactoeTableComponent> =
    viewChild.required<TictactoeTableComponent>('table');
  protected readonly Player = Player;
}
