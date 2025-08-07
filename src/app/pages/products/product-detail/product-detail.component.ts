import { Component } from '@angular/core';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'] // ✅ typo: use "styleUrls"
})
export class ProductDetailComponent {
 
  product = {
    id: 1,
    name: 'Adidas original',
    description: 'This is a sample product description.',
    price: 100.00,
    trackingNumber: 'TRK123456789',
    createdDate:'13/07/2022',
     statuses:[
    {
      status: 'Created',
      date: '2023-10-01',
      highlight: true
    },
    {
      status: 'Checked in stock',
      date: '2023-10-05',
      highlight: false
    },
    {
      status: 'Pending payment',
      date: '2023-10-10',
      highlight: false
    },
    {
      status: 'In stock',
      date: '2023-10-10',
      highlight: false
    }
  ]
    
  };

  managementOptions = [
    {Icon:'pi-box',label:'Create a parcel'},
    {Icon:'pi-share-alt',label:'Deconsolidate'},
    {Icon:'pi-comment',label:'Create an appeal'},
    {Icon:'pi-copy',label:'Duplicate'},
    {Icon:'pi-trash',label:'Archive',disabled:true},]

   userInput: string = this.product.name;

  productTypes = [
    { label: 'Sneakers', value: 'sneakers' },
    { label: 'Sandals', value: 'sandals' },
    { label: 'Boots', value: 'boots' }
  ];

  colors = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' }
  ]
  
 

  selectedColor = this.colors[0].value; // Default selected color

  selectedType = 'sneakers';
selectedUser: any;

  addToCart() {
    console.log(`${this.product.name} added to cart.`);
  }
}
