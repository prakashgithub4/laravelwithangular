import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {SampleService} from '../../sample.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  file:any;
  preview:any;
  constructor(private http:SampleService) { }
  form = new FormGroup({
    name:new FormControl(''),
    age:new FormControl(''),
    photo:new FormControl('')
  })
  get formdata(){
    return this.form.controls
  }
  _onSubmit(){
    let name = this.form.controls.name.value;
    let age = this.form.controls.age.value;
    let photo = this.file;
    let obj ={name:name,age:age,image:photo};
    this.http.postData(obj).subscribe((res)=>{
      console.log(res)
    })
  }
  _onChange(event:any){
    this.file = event.target.files[0];
    const render  = new FileReader();
    render.onload =()=>{
      this.preview = render.result;
      console.log(this.preview);
    }
  
  }
  ngOnInit(): void {
   
  }

}
