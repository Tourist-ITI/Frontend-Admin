import { Component, OnInit } from '@angular/core';
import { GetAdminTourService } from 'src/app/Services/get-tour/get-admin-tour.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteTourService } from './../../../Services/delete-tour.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { UpdateTourService } from './../../../Services/update-tour/update-tour.service';


@Component({
  selector: 'app-admin-modify-card',
  templateUrl: './admin-modify-card.component.html',
  styleUrls: ['./admin-modify-card.component.css']
})


export class AdminModifyCardComponent implements OnInit {




  isLoading = false;

  // for update
  tourImages: any[] = [];
  foodImages: any[] = [];
  reasons: any[] = [];

  // for modal
  closeResult = '';

  // for getting data
  data: any;
  adminId: any;

  constructor(private router: Router, private modalService: NgbModal, private updateTourService: UpdateTourService, private DeleteTourService: DeleteTourService, private AdminTourService: GetAdminTourService, private myActivatedRoute: ActivatedRoute) {

    this.adminId = this.myActivatedRoute.snapshot.params['id'];

  }





  // -----------------to get the tour by admin's id-----------------------
  getTour() {

    this.AdminTourService.getAdminTour(this.adminId).subscribe({

      next: (res: any) => {

        console.log(res.data);
        this.data = res.data;
      },

      error: (err) => {
        console.log(err);
      }

    })

  }


  ngOnInit(): void {

    // -----------------to get the tour by admin's id-----------------------
    this.getTour();

  }


  // ----------------to delete the tour by tour's id-----------------
  deleteTour(tour: any) {

    this.DeleteTourService.deleteTourById(tour._id).subscribe({


      next: (res: any) => {
        console.log(res);
        console.log(res.data);



        this.getTour();

      },
      error: (err) => {

        console.log(err);
      }

    })

  }


  // ********************************************************************************************


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


      // const fileHandle: FileHandle = {
      //   file: file,
      //   url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file))
      // };


      this.tourImages.push(file);
      console.log(this.tourImages);

    }


  };


  // ---------------------for pushing in foodImages array---------------
  onFileSelected2(event: any) {

    if (event.target.files) {

      const file = event.target.files[0];




      // const fileHandle: FileHandle = {
      //   file: file,
      //   url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file))
      // };


      this.foodImages.push(file);
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



  // --------------for posting in database---------------
  saveTour() {


    const formData = new FormData();

    Object.entries(this.validationForm.value).forEach(([key, value]) => formData.append(key, value!));

    this.foodImages.forEach(image => formData.append('photos', image));
    this.tourImages.forEach(image => formData.append('expected_photos', image));
    this.reasons.forEach(reason => formData.append('reasons', reason));



    if (this.validationForm.valid) {

      this.isLoading = true;

      this.updateTourService.updateAdminTour(formData, localStorage.getItem('tourId')).subscribe(

        {


          next: (res: any) => {
            console.log(res);
            this.isLoading = false;
            Swal.fire('Thank You...', 'Your Tour Added Successfully', 'success');
          },


          error: (err: any) => {
            console.log(err);
            this.isLoading = false;
            Swal.fire('Sorry....', 'There Was An Error, Please Try Again', 'error');
          }

        }

      );

    }

    else {
      Swal.fire('Oops...', 'Please Fill All Inputs', 'error');
    }

  }






  // ----------------for modal-----------
  open(content: any, tour: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );

    localStorage.setItem('tourId', tour._id);

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
