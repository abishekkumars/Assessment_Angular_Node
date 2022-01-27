import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../Model/iproduct';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product: Iproduct = {} as Iproduct;
  products: Iproduct[] = [];

  txtId: number = 0;
  txtname: string = "";
  txtprize: number=0;
  txtcountry: string = "";
  txtcategory: number = 0;
  
  // formvalue !:FormGroup;
  
  constructor(private productService: ProductService) {
    // productService.GetProduct().subscribe((c) => { this.products = c; } );
    // private productService: ProductService,private formbuilder :FormBuilder
    productService.GetProduct().subscribe((c) => { this.products = c; } );
    
  }
  SaveProduct(): void {
    this.product.id = this.txtId;
    this.product.P_Name = this.txtname;
    this.product.Prize = this.txtprize;
    this.product.CountryOfOrigin = this.txtcountry;
    this.product.Category = this.txtcategory;
    
    
    this.productService.SaveNewProduct(this.product).subscribe(res => { console.log(res); });
  }

  UpdateProduct(): void {
    this.product.id = this.txtId;
    this.product.P_Name = this.txtname;
    this.product.Prize = this.txtprize;
    this.product.CountryOfOrigin = this.txtcountry;
    this.product.Category = this.txtcategory;
    
    this.productService.UpdateProduct(this.product).subscribe(res => { console.log(res); });
  }

  DeleteProduct(): void {
    this.productService.RemoveProduct(this.txtId).subscribe(res => console.log(res));
  }
  // Edit(row:any){
    
  // }
  ngOnInit(): void {
    // this.formvalue=this.formbuilder.group({
    //   id:[''],
    //   name:[''],
    //   price:[''],
    //   country:[''],
    //   category:['']


    // })
  }

}