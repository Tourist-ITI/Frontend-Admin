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
  foodImages: FileHandle[] = [];
  reasons: any[] = [];
  flag: boolean;

  constructor(private createTourService: CreateTourService, private sanitizer: DomSanitizer) {

    this.flag = true;
  };


  ngOnInit(): void { };



  // ---------------- for validating inputs ---------------------
  validationForm = new FormGroup({

    title: new FormControl('', Validators.required),
    // photos: new FormControl('', Validators.required),
    // expected_photos: new FormControl('', Validators.required),
    start_date: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    person_cost: new FormControl('', Validators.required),
    person_num: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    private: new FormControl('Select', Validators.required),
    food: new FormControl('Select', Validators.required),
    walk: new FormControl('Select', Validators.required),
    carbon_neut: new FormControl('Select', Validators.required),
    include: new FormControl('', Validators.required),
    meeting_point: new FormControl('', Validators.required),
    city_highlights: new FormControl('', Validators.required),
    hidden_gems: new FormControl('', Validators.required),
    magical_storytelling: new FormControl('', Validators.required),
    special_treat: new FormControl('', Validators.required),
    // reasons: new FormControl('', Validators.required),
  })

  // ---------------------for pushing in tourImages array---------------
  onFileSelected(event: any) {

    if (event.target.files) {

      const file = event.target.files[0];


      console.log(file);


      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file))
      };


      this.tourImages.push(fileHandle);
      console.log(this.tourImages);

    }


  };


  // ---------------------for pushing in foodImages array---------------
  onFileSelected2(event: any) {

    if (event.target.files) {

      const file = event.target.files[0];

      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file))
      };


      this.foodImages.push(fileHandle);
      console.log(this.foodImages);

    }

  };


  // ---------------------for pushing in reasons array---------------
  getReasons(event: any) {

    if (event.target.value) {

      let value = event.target.value;
      this.reasons.push(value);


    }


  }

  // ----------------for removing tour images -------------
  removeImage(i: any) {

    this.tourImages?.splice(i, 1);
    console.log(this.tourImages);

  }

  // ----------------for removing food images -------------
  removeImage2(i: any) {

    this.foodImages?.splice(i, 1);
    console.log(this.foodImages);

  }

  // ----------------for validating inputs-------------
  get titleValid() {

    return this.validationForm.controls['title'].valid;

  }

  // --------------for posting in database---------------
  saveTour() {

    // if (this.validationForm.valid) {
    this.flag = true;
    this.createTourService.addTour({ ...this.validationForm.value, photos: this.tourImages.map((item) => item.file), expected_photos: this.foodImages.map(item => item.file) }).subscribe();

    console.log({ ...this.validationForm.value, photos: this.tourImages.map((item) => item.file), expected_photos: this.foodImages.map(item => item.file) });

    // }

    // else {
    //   this.flag = false;
    // }


  }


}
