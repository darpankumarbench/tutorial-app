import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../service/user-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data: any;
  constructor(private userService: UserDataService) { }

  ngOnInit(): void {
    let that = this;
    this.userService.getData().subscribe(resp => {
      console.log(resp);
      that.data= resp;
    });

  }

}
