import { Component } from '@angular/core';
import { InputTextDirective } from '../../directives/input-text.directive';
import { ButtonDirective } from '../../directives/button.directive';
import { ToDoItemsService } from '../../services/to-do-items.service';

@Component({
  selector: 'add-to-do',
  standalone: true,
  imports: [InputTextDirective, ButtonDirective],
  templateUrl: './add-to-do.component.html',
})
export class AddToDoComponent {
  constructor(private todoItemService: ToDoItemsService) {}

  private title = '';
  private description = '';

  handleTitleChange(event: Event) {
    this.title = (event.target as HTMLInputElement)?.value;
  }

  handleDescriptionChange(event: Event) {
    this.description = (event.target as HTMLInputElement)?.value;
  }

  handleAddToDo() {
    this.todoItemService.addToDoItem({
      title: this.title,
      description: this.description,
    });
  }
}
