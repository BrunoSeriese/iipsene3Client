import {Component, Input, OnInit} from '@angular/core';
import {Video} from "./video.model";
import {NavigationService} from "../../shared/navigation.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() public video: Video;

  constructor(private navigationService: NavigationService) { }

  public ngOnInit(): void {
    this.navigationService.setSelected(0);
  }

}
