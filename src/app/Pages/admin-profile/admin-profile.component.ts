import { Component, OnInit } from '@angular/core';
import { AdminLogInService } from 'src/app/Services/auth/admin-log-in.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateAdminService } from './../../Services/update-admin-profile/update-admin.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  // for modal
  closeResult = '';

  //local storage
  ssn = localStorage.getItem('ssn');
  email = localStorage.getItem('email');

  flag: boolean = true;

  // data from response
  username: any;
  phone: any;
  userId: any;
  bio = 'hello,write something about yourself';
  cover_photo: any;
  photo: any;
  city: any;

  File: any;

  isLoading = true;
  photoFile: any;
  coverFile: any;
  editedUser: any;

  constructor(private AdminLoginService: AdminLogInService, private modalService: NgbModal, private updateAdminService: UpdateAdminService) {
  
    this.userId = localStorage.getItem('id');
  
  }



  getUserData() {
    this.updateAdminService.getUserById(this.userId).subscribe({
      next: (res: any) => {
        console.log(res.data);
        this.editedUser = res.data;
      },
      error: (err) => { },
    });
  }


  ngOnInit(): void {

    //get userby id
    this.getUserData();
  }

  validationForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    city: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
    ]),
    bio: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
  });



  checkForm() {
    if (this.validationForm.valid) {
      this.save();
    } else {
      this.flag = false;
      console.log('Inputs Not Valid');
      console.log(this.validationForm);
    }
  }


  // send form values to backend for profile updating
  save() {
    console.log('saved');
  }



  get nameValid() {
    return this.validationForm.controls['username'].valid;
  }
  get locationValid() {
    return this.validationForm.controls['city'].valid;
  }
  get phoneValid() {
    return this.validationForm.controls['phone'].valid;
  }
  get bioValid() {
    return this.validationForm.controls['bio'].valid;
  }

  // change  profile pic
  handlePhotoInput(event: any) {
    this.photoFile = event.target.files[0];
    console.log(this.photoFile);
  }

  handleCoverPhotoInput(event: any) {
    this.coverFile = event.target.files[0];
    console.log(this.coverFile);
  }

  updateProfile() {
    const formData = new FormData();

    Object.entries(this.validationForm.value).forEach(([key, value]) => {
      formData.append(key, value!);
    });
    formData.append('photo', this.photoFile);
    formData.append('cover_photo', this.coverFile);

    this.updateAdminService.updateUser(formData).subscribe({
      next: (res: any) => {
        console.log(res);
        this.isLoading = false;

        this.editedUser = res.data;

        this.username = res.data.username;
        this.phone = res.data.phone;
        this.bio = res.data.bio;
        this.city = res.data.city;

        console.log(this.editedUser);
        this.getUserData();

        Swal.fire('Good job!', 'You are updated!', 'success');
      },
      error: (err) => {
        console.log(err);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: 'please refresh the website',
        });
      },
    });
  }



  // for modal
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
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


  // to logout and remove data from local storage
  logOut() {

    this.AdminLoginService.logout();
  }

}
