import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(private loadingController : LoadingController, 
    private router : Router) { }

  ngOnInit() {
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Veuillez patienter...',
      duration: 2000
    });
    await loading.present();

    // const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    await loading.onDidDismiss().then(
      (value) =>{
        const { role, data } = value
        this.router.navigate(['/home'])
      }
    );
  }
}
