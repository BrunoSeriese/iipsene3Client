import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private selectedAnswer: number;

  constructor() { }

  public getSelected(): number {
    return this.selectedAnswer;
  }

  public setSelected(value: number): void {
    this.selectedAnswer = value;
  }

  public clearSelected(): void {
    this.selectedAnswer = null;
  }

  public isSelectedAnswerEmpty(): boolean {
    return this.selectedAnswer == null;
  }
}
