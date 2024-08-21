export class ToDoItem {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public complete: boolean
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.complete = complete;
  }
}
