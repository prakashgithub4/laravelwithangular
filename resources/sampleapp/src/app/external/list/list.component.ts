import { Component, OnInit } from '@angular/core';
import {List} from "../../models/List";
import {SampleService} from '../../sample.service';
//import {Observable} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   list = new Array<List>();
   data:any =[];
  constructor(private http:SampleService) { }

  ngOnInit(): void {
    this.http.getList().subscribe((data)=>{
     
      this.data =  data;
      console.log(this.data);
    });
  }

}
