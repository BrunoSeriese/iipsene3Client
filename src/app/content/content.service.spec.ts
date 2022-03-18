import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ContentService } from './content.service';
import {Answer} from "./shared/answer/answer.model";
import {Node} from "./tree/node.model";
import {Content} from "./content";

describe('ContentService', () => {
  let service: ContentService;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should have node", () => {
    let contents = [
      new Content(1, "Is koffie lekker?", "Question",[
        new Answer(1, "Ja"),
        new Answer(2, "Beetje wel"),
        new Answer(3, "Beetje niet"),
        new Answer(4, "Nee"),
      ]),
      new Content(6, "Je gaat een sterke kop koffie krijgen", "Explanation",[new Answer(9, "Die heb je verdient!")]),
      new Content(2, "Je krijgt koffie", "Result", [new Answer(5, "Je krijgt een sterke kop koffie")]),
      new Content(7, "Een mooie video over koffie", "Video", [new Answer(10, "https://www.youtube.com/watch?v=WrZZ_L7rf-A")]),
      new Content(3, "Je krijgt koffie", "Result", [new Answer(6, "Je krijgt een normale kop koffie")]),
      new Content(4, "Je krijgt koffie", "Result", [new Answer(7, "Je krijgt een slappe kop koffie")]),
      new Content(5, "Je krijgt geen koffie", "Result", [new Answer(8, "Je krijgt geen kop koffie")]),
    ];
    let root: Node = service.createTree(contents);
    expect(root.content).toEqual(new Content(1, "Is koffie lekker?", "Question", [
      new Answer(1, "Ja"),
      new Answer(2, "Beetje wel"),
      new Answer(3, "Beetje niet"),
      new Answer(4, "Nee"),
    ]));
  });

  it("last node should be null", () => {
    let contents = [
      new Content(1, "Is koffie lekker?", "Question",[
        new Answer(1, "Ja"),
        new Answer(2, "Beetje wel"),
        new Answer(3, "Beetje niet"),
        new Answer(4, "Nee"),
      ]),
      new Content(6, "Je gaat een sterke kop koffie krijgen", "Explanation",[new Answer(9, "Die heb je verdient!")]),
      new Content(2, "Je krijgt koffie", "Result", [new Answer(5, "Je krijgt een sterke kop koffie")]),
      new Content(7, "Een mooie video over koffie", "Video", [new Answer(10, "https://www.youtube.com/watch?v=WrZZ_L7rf-A")]),
      new Content(3, "Je krijgt koffie", "Result", [new Answer(6, "Je krijgt een normale kop koffie")]),
      new Content(4, "Je krijgt koffie", "Result", [new Answer(7, "Je krijgt een slappe kop koffie")]),
      new Content(5, "Je krijgt geen koffie", "Result", [new Answer(8, "Je krijgt geen kop koffie")]),
    ];
    service.createTree(contents);
    let node: Node = service.getLastNode();
    expect(node).toBeUndefined();
  });

  it("should set next node", () => {
    let contents = [
      new Content(1, "Is koffie lekker?", "Question",[
        new Answer(1, "Ja"),
        new Answer(2, "Beetje wel"),
        new Answer(3, "Beetje niet"),
        new Answer(4, "Nee"),
      ]),
      new Content(6, "Je gaat een sterke kop koffie krijgen", "Explanation",[new Answer(9, "Die heb je verdient!")]),
      new Content(2, "Je krijgt koffie", "Result", [new Answer(5, "Je krijgt een sterke kop koffie")]),
      new Content(7, "Een mooie video over koffie", "Video", [new Answer(10, "https://www.youtube.com/watch?v=WrZZ_L7rf-A")]),
      new Content(3, "Je krijgt koffie", "Result", [new Answer(6, "Je krijgt een normale kop koffie")]),
      new Content(4, "Je krijgt koffie", "Result", [new Answer(7, "Je krijgt een slappe kop koffie")]),
      new Content(5, "Je krijgt geen koffie", "Result", [new Answer(8, "Je krijgt geen kop koffie")]),
    ];
    let root: Node = service.createTree(contents);
    service.setNextNode(root.getChildren()[0]);
    expect(service.getContent()).toEqual(new Content(6, "Je gaat een sterke kop koffie krijgen", "Explanation", [new Answer(9, "Die heb je verdient!")]));
    expect(service.getLastNode().content).toEqual(new Content(1, "Is koffie lekker?", "Question", [
      new Answer(1, "Ja"),
      new Answer(2, "Beetje wel"),
      new Answer(3, "Beetje niet"),
      new Answer(4, "Nee"),
    ]));
  });

  it("should get index", () => {
    let contents = [
      new Content(1, "Is koffie lekker?", "Question",[
        new Answer(1, "Ja"),
        new Answer(2, "Beetje wel"),
        new Answer(3, "Beetje niet"),
        new Answer(4, "Nee"),
      ]),
      new Content(6, "Je gaat een sterke kop koffie krijgen", "Explanation",[new Answer(9, "Die heb je verdient!")]),
      new Content(2, "Je krijgt koffie", "Result", [new Answer(5, "Je krijgt een sterke kop koffie")]),
      new Content(7, "Een mooie video over koffie", "Video", [new Answer(10, "https://www.youtube.com/watch?v=WrZZ_L7rf-A")]),
      new Content(3, "Je krijgt koffie", "Result", [new Answer(6, "Je krijgt een normale kop koffie")]),
      new Content(4, "Je krijgt koffie", "Result", [new Answer(7, "Je krijgt een slappe kop koffie")]),
      new Content(5, "Je krijgt geen koffie", "Result", [new Answer(8, "Je krijgt geen kop koffie")]),
    ];
    let root: Node = service.createTree(contents);
    service.setNextNode(root.getChildren()[0]);
    let index: number = service.getPreviousAnswerIndexByCurrentNode();
    expect(index).toEqual(0);
  });

  it("should get content by answer index", () => {
    let contents = [
      new Content(1, "Is koffie lekker?", "Question",[
        new Answer(1, "Ja"),
        new Answer(2, "Beetje wel"),
        new Answer(3, "Beetje niet"),
        new Answer(4, "Nee"),
      ]),
      new Content(6, "Je gaat een sterke kop koffie krijgen", "Explanation",[new Answer(9, "Die heb je verdient!")]),
      new Content(2, "Je krijgt koffie", "Result", [new Answer(5, "Je krijgt een sterke kop koffie")]),
      new Content(7, "Een mooie video over koffie", "Video", [new Answer(10, "https://www.youtube.com/watch?v=WrZZ_L7rf-A")]),
      new Content(3, "Je krijgt koffie", "Result", [new Answer(6, "Je krijgt een normale kop koffie")]),
      new Content(4, "Je krijgt koffie", "Result", [new Answer(7, "Je krijgt een slappe kop koffie")]),
      new Content(5, "Je krijgt geen koffie", "Result", [new Answer(8, "Je krijgt geen kop koffie")]),
    ];
    service.createTree(contents);
    let node = service.getNodeByAnswerIndex(0);
    expect(node.content).toEqual(new Content(6, "Je gaat een sterke kop koffie krijgen", "Explanation", [new Answer(9, "Die heb je verdient!")]));
  });

  it("should be empty", () => {
    let b: boolean = service.isArrayEmpty([]);
    expect(b).toBeTrue();
  });
});
