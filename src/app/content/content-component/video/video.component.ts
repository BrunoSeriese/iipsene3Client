import {Component, Input, OnInit} from '@angular/core';
import {NavigationService} from "../../shared/navigation.service";
import {Content} from "../../content";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() public video: Content;

  constructor(private navigationService: NavigationService) { }

  public ngOnInit(): void {
    this.navigationService.setSelected(0);
  }

}
