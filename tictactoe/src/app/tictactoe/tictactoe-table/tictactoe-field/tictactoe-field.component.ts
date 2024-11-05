import {Component, input, InputSignal, output, OutputEmitterRef} from '@angular/core';
import {Player} from '../tictactoe-table.component';

@Component({
  selector: 'app-tictactoe-field',
  standalone: true,
  imports: [],
  templateUrl: './tictactoe-field.component.html',
  styleUrl: './tictactoe-field.component.scss'
})
export class TictactoeFieldComponent {
  public readonly player: InputSignal<Player> = input.required();
  public readonly index: InputSignal<number> = input.required();
  public readonly onClicked: OutputEmitterRef<number> = output();


  protected handleClick(): void {
    this.onClicked.emit(this.index());
  }
}
