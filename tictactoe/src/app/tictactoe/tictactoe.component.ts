import { Component } from '@angular/core';
import {TictactoeTableComponent} from './tictactoe-table/tictactoe-table.component';

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

}
