import { DragonballService } from './../dragonball.service';
import { Component, inject } from "@angular/core";
import { CharacterListComponent } from "./character-list/character-list.component";
import { CharacterAddComponent } from "./character-add/character-add.component";

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent]
})
export class DragonBallSuperPageComponent {
  public dragonballService = inject(DragonballService);
}
