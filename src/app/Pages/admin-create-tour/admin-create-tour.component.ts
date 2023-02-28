import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from 'src/app/Models/file-handle.model';
import { CreateTourService } from 'src/app/Services/create-tour/create-tour.service';

@Component({
  selector: 'app-admin-create-tour',
  templateUrl: './admin-create-tour.component.html',
  styleUrls: ['./admin-create-tour.component.css']
})
export class AdminCreateTourComponent implements OnInit {


  tourImages: FileHandle[] = [];

  constructor(private createTourService: CreateTourService, private sanitizer: DomSanitizer) { };


  ngOnInit(): void { };




  validationForm = new FormGroup({

    title: new FormControl('', Validators.required),
    photos: new FormControl(this.tourImages, Validators.required),
    expected_photos: new FormControl('', Validators.required),
    // start_date: new FormControl('',Validators.required),
    duration: new FormControl('', Validators.required),
    // person_cost: new FormControl('',Validators.required),
    // person_num: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    private: new FormControl('', Validators.required),
    food: new FormControl('', Validators.required),
    walk: new FormControl('', Validators.required),
    carbon_neut: new FormControl('', Validators.required),
    include: new FormControl('', Validators.required),
    meeting_point: new FormControl('', Validators.required),
    city_highlights: new FormControl('', Validators.required),
    hidden_gems: new FormControl('', Validators.required),
    magical_storytelling: new FormControl('', Validators.required),
    special_treat: new FormControl('', Validators.required),
    reasons: new FormControl('', Validators.required),
    coordinates: new FormControl('', Validators.required),

  })


  onFileSelected(event: any) {

    console.log(event);

    if (event.target.files) {

      const file = event.target.files[0];


      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file))
      };


      this.tourImages.push(fileHandle);
      console.log(this.tourImages);
      

    }

  };



  saveTour() {

    console.log(this.validationForm.value);


  }
}
