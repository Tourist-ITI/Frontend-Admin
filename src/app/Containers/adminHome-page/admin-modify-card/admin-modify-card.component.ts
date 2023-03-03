import { Component, OnInit } from '@angular/core';
import { GetAdminTourService } from 'src/app/Services/get-tour/get-admin-tour.service';
import { ActivatedRoute } from '@angular/router';
import { DeleteTourService } from './../../../Services/delete-tour.service';


@Component({
  selector: 'app-admin-modify-card',
  templateUrl: './admin-modify-card.component.html',
  styleUrls: ['./admin-modify-card.component.css']
})


export class AdminModifyCardComponent implements OnInit {


  data: any;
  adminId: any;


  constructor(private DeleteTourService: DeleteTourService, private AdminTourService: GetAdminTourService, private myActivatedRoute: ActivatedRoute) {

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


}
