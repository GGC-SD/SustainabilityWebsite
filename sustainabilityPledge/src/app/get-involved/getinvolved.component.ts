import { Component, OnInit} from '@angular/core';
import { GetInvolvedServiceService } from '../get-involved-service.service';

@Component({
    selector: 'app-getinvolved',
    templateUrl: './getinvolved.component.html',
    styleUrls: ['./getinvolved.component.css']
})
export class GetInvolvedComponent implements OnInit {
    constructor(
        public getInvolvedService: GetInvolvedServiceService
    ) {

    }

    name: string;
    email: string;
    phone: string;


    saveInfo(){
        this.getInvolvedService.saveInfo(this.name,this.email, this.phone);
        this.name = '';
        this.email = '';
        this.phone = '';
    }
    ngOnInit(): void {}
}