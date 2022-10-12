import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-public-api-links',
  templateUrl: './public-api-links.component.html',
  styleUrls: ['./public-api-links.component.css']
})
export class PublicApiLinksComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()

   }
   fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.apiData=data
      }
    )
   }

  apiData:any={}

  ngOnInit(): void {
  }

}
