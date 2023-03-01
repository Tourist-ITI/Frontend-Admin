import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-off-canvas',
  templateUrl: './off-canvas.component.html',
  styleUrls: ['./off-canvas.component.css']
})



export class OffCanvasComponent implements OnInit {

  id = 0;

  constructor( myActivatedRoute: ActivatedRoute) {

    this.id = myActivatedRoute.snapshot.params['id'];

  }

  ngOnInit(): void { }


}
