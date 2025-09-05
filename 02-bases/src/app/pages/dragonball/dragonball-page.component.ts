import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './dragonball-page.component.html',
})
export class DragonBallPageComponent {

  // name = signal('Gohan');
  // power = signal(100);

  // characters = signal<Character[]>([
  //   { id: 1, name: 'Goku', power: 9001 },
  //   { id: 2, name: 'Vegeta', power: 9000 },
  //   { id: 3, name: 'Piccolo', power: 8000 },
  //   { id: 4, name: 'Yamcha', power: 500 },
  // ]);

  // addCharacter() {
  //   if (!this.name() || !this.power() || this.power() <= 0) {
  //     return;
  //   }
  //   const newCharacter: Character = {
  //     id: this.characters().length + 1,
  //     name: this.name(),
  //     power: this.power(),
  //   }

  //   // this.characters().push(newCharacter);
  //   this.characters.update((list) => [...list, newCharacter]);
  //   this.resetFields();
  // }
  // resetFields() {
  //   this.name.set('');
  //   this.power.set(0);
  // }
}
