import {Component, signal, WritableSignal} from '@angular/core';
import {TictactoeFieldComponent} from './tictactoe-field/tictactoe-field.component';

@Component({
  selector: 'app-tictactoe-table',
  standalone: true,
  imports: [
    TictactoeFieldComponent
  ],
  templateUrl: './tictactoe-table.component.html',
  styleUrl: './tictactoe-table.component.scss'
})
export class TictactoeTableComponent {
  protected readonly size: number = 3;
  public moveCount: number = 0;
  public readonly currentPlayer: WritableSignal<Player> = signal(Player.One);
  protected readonly fields: WritableSignal<Player[]> = signal(new Array(this.size * this.size).fill(Player.None));
  public readonly winner: WritableSignal<Player> = signal(Player.None);

  public reset(): void {
    this.fields.set(new Array(this.size * this.size).fill(Player.None));
    this.currentPlayer.set(Player.One);
    this.winner.set(Player.None);
    this.moveCount = 0;
  }

  protected handleFieldClicked(index: number): void {
    if (this.winner() !== Player.None
      || this.fields()[index] !== Player.None) {
      return;
    }
    this.moveCount++;
    this.fields()[index] = this.currentPlayer();
    if (this.currentPlayer() === Player.One) {
      this.currentPlayer.set(Player.Two);
    }
    else {
      this.currentPlayer.set(Player.One);
    }

    this.winner.set(this.checkWinner());
  }

  protected checkWinner(): Player {
    for (let i = 0; i < this.size; i++) {
      const startIndex = i * this.size;
      if (this.fields()[startIndex] !== Player.None &&
        this.fields()[startIndex] === this.fields()[startIndex + 1] &&
        this.fields()[startIndex] === this.fields()[startIndex + 2]) {
        return this.fields()[startIndex];
      }
    }
    for (let i = 0; i < this.size; i++) {
      if (this.fields()[i] !== Player.None
        && this.fields()[i] === this.fields()[i + this.size]
        && this.fields()[i] === this.fields()[i + 2 * this.size]) {
        return this.fields()[i];
      }
    }
    if (this.fields()[0] !== Player.None
      && this.fields()[0] === this.fields()[4]
      && this.fields()[0] === this.fields()[8]) {
      return this.fields()[0];
    }
    if (this.fields()[2] !== Player.None
      && this.fields()[2] === this.fields()[4]
      && this.fields()[2] === this.fields()[6]) {
      return this.fields()[2];
    }
    return Player.None;
  }

  protected readonly Player = Player;
}

export enum Player {
  None = ' ',
  One = 'X',
  Two = 'O'
}
