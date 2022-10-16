import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewfrds',
  templateUrl: './viewfrds.component.html',
  styleUrls: ['./viewfrds.component.css']
})
export class ViewfrdsComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
status:boolean=false
  fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.frdsData=data
        this.status=true
      }
    )
  }
  
  frdsData:any=[]
  ngOnInit(): void {
  }

}
